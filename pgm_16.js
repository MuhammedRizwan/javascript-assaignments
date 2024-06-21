let read=require("readline-sync");

let n=read.questionInt("enter a number: ");
flag=0;
for(var i=2;i<n/2;i++){
    if(n%i===0){
        flag=1;
        break;
    }
}
if (flag==0){
    console.log("prime number");
}else{
    console.log("not a prime number");
}

