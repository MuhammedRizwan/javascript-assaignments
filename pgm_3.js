let read=require("readline-sync");


let pa=read.questionInt('enter principle amount:');
let rate=read.questionInt('enter intrest rate:');
let year=read.questionInt('enter no.of year:');
let si=(pa*rate*year)/100;
console.log("simple intrest:"+si);