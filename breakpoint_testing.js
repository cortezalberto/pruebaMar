import http from 'k6/http';
import { check } from 'k6';
import { generateDNAArray } from './generateDNA.js';

export const options = {
	executor: 'ramping-arrival-rate', //Assure load increase if the system slows
  stages: [
    { duration: '5m', target: 20000 }, // just slowly ramp-up to a HUGE load
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
