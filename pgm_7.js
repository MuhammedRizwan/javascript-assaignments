let read=require("readline-sync");

let num=read.questionInt("enter Number:");
let sum;
for(i=1;i<=10;i++){
    sum=i*num;
    console.log(i+" x "+num+" = "+sum);
}