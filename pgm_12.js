let read=require("readline-sync");

let n=read.questionInt("enter the size of an array:");
let arr=[];
let i,num;
console.log("enter the values of array");
for(i=1;i<=n;i++){
    num=read.questionInt();
    arr.push(num);
}
// var result=arr.sort(function compare(a,b){
//     return b-a;
// });
// console.log(result);
for(i=0;i<arr.length;i++){
    for(j=0;j<arr.length;j++){
        if (arr[i]>=arr[j]){
            temp=arr[i];
            arr[i]=arr[j];
            arr[j]=temp;
        }
    }
}
console.log("sorted array:"+arr);