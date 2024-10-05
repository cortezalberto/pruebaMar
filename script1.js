import http from 'k6/http';

export default function () {
  const payload = JSON.stringify({
    dna: [
        "TCA",
        "CAG",
        "ATC"
		]
  });
  const headers = { 'Content-Type': 'application/json' };
  http.post('http://localhost:8080', payload, { headers });
}