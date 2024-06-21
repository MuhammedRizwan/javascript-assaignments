var read=require("readline-sync");
var sum=0;
var n=read.questionInt("enter a limit:");
for(i=0;i<=n;i++){
    if(i%2===1){
        sum=sum+i;
    }
}
console.log("sum of odd number: "+sum);