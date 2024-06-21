let read=require("readline-sync");
let i;
let arr1=[];
let arr2=[];
let temp;

let n=read.questionInt("enter the size of array: ");
console.log("enter the values array 1:")
for(i=1;i<=n;i++){
    num=read.questionInt("");
    arr1.push(num);
}
console.log("enter the values array 2:");
for(i=1;i<=n;i++){
    num=read.questionInt("");
    arr2.push(num)
}
console.log("array after swapping");
for(i=0;i<n;i++){
    temp=arr1[i];
    arr1[i]=arr2[i];
    arr2[i]=temp
}
console.log("array1:"+arr1.join(" "))
console.log("array2:"+arr2.join(" "));