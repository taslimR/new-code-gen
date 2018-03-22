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
let nf = program.filledCellCount;

while(true)
{
	let a = Math.floor(Math.random() * n);
	const mySet = new Set();
	
	mySet.add(a);
	if(mySet.size == nf)
		break;
}

		
		console.log(`{ for (let item of mySet) console.log(item); }`);
