let read=require("readline-sync");

let income=read.questionInt("Enter the annual income: ");
let tax;
if(income>=1000000){
    tax=(1000000*30)/100;
}
else if(income>=500000){
    tax=(500000*20)/100;
}
else if(income>=250000){
    tax=(250000*5) /100;
}
else{
    tax="no tax";
}
console.log("income tax amount="+tax);