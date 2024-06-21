let read=require("readline-sync");

let s=read.question("enter a string:");
let length=s.length-1;
let flag=0;
for(i=0;i<s.length;i++){
    if(s[i]!=s[length-i]){
        flag=1;
        break;
    }
}
if(flag===0){
    console.log("entered string is palidrome");
}else{
    console.log("entered string is not palidrome");
}