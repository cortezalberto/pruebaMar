import http from 'k6/http';
import { check } from 'k6';
import { generateDNAArray } from './generateDNA.js';

export const options = {
	stages: [
    { duration: '2m', target: 2000 }, // fast ramp-up to a high point
    // No plateau
    { duration: '1m', target: 0 }, // quick ramp-down to 0 users
  ],
};

export default function() {
	const url = 'http://localhost:8080/mutant'
	const data = generateDNAArray(30);
  let res = http.post(url, JSON.stringify(data), {
    headers: { 'Content-Type': 'application/json' },
  });

  check(res, {
    'Post status is 200': (r) => res.status === 200,
    'Post Content-Type header': (r) => res.headers['Content-Type'] === 'application/json',
  });
}
