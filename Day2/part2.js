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
	let aim = 0;

	readInput('input.txt').forEach((line) => {
		const [direction, step] = line.split(' ');
		const stepAsNumber = parseInt(step);

		if (direction === 'down') {
			aim += stepAsNumber;
			return;
		}

		if (direction === 'up') {
			aim -= stepAsNumber;
			return;
		}

		if (direction === 'forward') {
			horizontalPosition += stepAsNumber;
			depth += (aim * step);
			return;
		}
	});

	console.log(`Answer: ${horizontalPosition * depth}`);
} catch (err) {
	console.error(err);
}
