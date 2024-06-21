function callback(elements){
    sum=sum+elements;
    return sum%2==0;
}
function myFilter(a,call){
    let result=0;
    a.forEach(e => {
        result=call(e);
    });
    return result;
}
const read=require("readline-sync");
let myarray=[];
let sum=0;
let n=read.questionInt("enter the size of array:");
for(i=0;i<n;i++){
    myarray.push(read.questionInt());
}
let result=myFilter(myarray,callback);
console.log(result+" Sum= "+sum);
