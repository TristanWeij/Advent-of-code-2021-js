const fs = require('fs');
const path = require('path');

function readInput(fileName) {
	const inputFile = path.resolve(__dirname, fileName);
	const data = fs.readFileSync(inputFile, 'UTF-8');

	return data.split(/\r?\n/);
}

const input = readInput('input.txt');

let current;
let previous = 0;
let increased = 0;
for (let loopCount = 0; loopCount < input.length; loopCount++) {
	current = input[loopCount];

	if (current > previous) {
		increased++;
	}

	previous = current;
}

console.log(`Increased amount: ${increased}`);
