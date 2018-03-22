#!/usr/bin/env node
//console.log('Hello, world!');
var program = require('commander');
program
 .option('--cell-count <cellCount>', 'number of cells')
 .option('--ratio <ratio>', 'ratio of width and height')
 .option('--width <width>', 'width')
 .option('--height <height>', 'height')
 .option('--filled-cell-count <filledCellCount>', 'filled cell amount')
.parse(process.argv);

let n = program.cellCount;
		let r = program.ratio;

		let m = r % 1;

		let p = (r - m) * 2;
		let q = p + (p * m);

		let  xx = n / (p * q);

		let x = Math.sqrt(xx);

		let w = Math.ceil(x * p);

		let h = Math.ceil(x * q);

		console.log(`{ width: ${w}, height: ${h} }`);
