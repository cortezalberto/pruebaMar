export function generateDNAArray(n) {
	// Define the possible nucleotide letters
	const nucleotides = ["A", "T", "C", "G"];
	
	// Create an array of strings
	let dnaArray = [];

	for (let i = 0; i < n; i++) {
			let row = '';
			for (let j = 0; j < n; j++) {
					// Randomly select a nucleotide and add it to the string row
					row += nucleotides[Math.floor(Math.random() * nucleotides.length)];
			}
			dnaArray.push(row);
	}

	return { dna: dnaArray };
}


