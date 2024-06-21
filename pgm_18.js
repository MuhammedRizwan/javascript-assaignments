var read=require("readline-sync")

let wt=read.questionFloat("Written Test:");
let le=read.questionFloat("Lab Assaignment:");
let a=read.questionFloat("Assaignment:");
let avg=((wt*70)+(le*20)+(a*10))/100;
console.log("Grade of student is:"+avg);