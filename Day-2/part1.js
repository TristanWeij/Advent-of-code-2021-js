const fs = require('fs');
const path = require('path');

function readInput(fileName) {
	const inputFile = path.resolve(__dirname, fileName);
	const data = fs.readFileSync(inputFile, 'UTF-8');

	return data.split(/\r?\n/);
}

try {
	let horizontalPosition = 0;
	let depth = 0;

	readInput('input.txt').forEach((line) => {
		const [direction, step] = line.split(' ');
		const stepAsNumber = parseInt(step);

		if (direction === 'forward') {
			horizontalPosition += stepAsNumber;
			return;
		}

		if (direction === 'down') {
			depth += stepAsNumber;
			return;
		}

		if (direction === 'up') {
			depth -= stepAsNumber;
			return;
		}
	});

	console.log(`Answer: ${horizontalPosition * depth}`);
} catch (err) {
	console.error(err);
}
