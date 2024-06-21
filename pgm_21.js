var read=require("readline-sync");
let arr=[];
let i;
let n=read.questionInt("enter the limit: ");
for(i=0;i<n;i++){
    num=read.questionInt("");
    arr[i]=num;
}
let arr1=[];
let sum;
for(i=0;i<arr.length-1;i++){
    sum=arr[i]*arr[i+1]
    arr1[i]=sum;
}
console.log(arr1.join(" "));
