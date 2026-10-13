'use strict';

// Implement function `range(start: number, end: number): array` returning
// array with all numbers from the range [15, 30] including endpoints

const range = (sNumber, eNumber) => {
	let array = [];
	for(let i = sNumber; i <= eNumber; i++ ) {
		array.push(i);
	}
	return array;
};

module.exports = { range };
