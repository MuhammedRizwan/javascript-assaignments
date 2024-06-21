let read=require("readline-sync");
let mark=read.questionFloat("enter mark:");
if(mark>=50 && mark<100){
    console.log("Passed");
}else{
    console.log("Failed");
}