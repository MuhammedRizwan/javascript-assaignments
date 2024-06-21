let read=require("readline-sync");
let i,num,count=0;
let arr=[];
let n=parseInt(read.question("enter the size of an array:"));
console.log("enter the values of array:");
for(i=0;i<n;i++){
    num=parseInt(read.question());
    arr.push(num);
}
for(i=0;i<=arr.length;i++){
    if(arr[i]%2===0){
        count++;
    }
}
console.log("number of even number in the given array is "+count);
