 class calculator{
    addition(num1,num2){
         return num1+num2;
    }
    subtraction(num1,num2){
        return num1-num2;
    }
    multiplication(num1,num2){
        return num1*num2;
    }
    division(){
        return num1/num2;
    }
 }
 let read=require("readline-sync");
 let op,a,b,c,d;
 calc=new calculator();
 while (true){
    console.log(`
        1.addition
        2.subtraction
        3.multiplication
        4.division
        5.exit
    `);
    op=read.questionInt("enter an option:");
    if (op===1){
        num1=read.questionInt("enter num1:");
        num2=read.questionInt("enter num2:");
        a=calc.addition(num1,num2);
        console.log("addition="+a);
    }
    else if(op===2){
        num1=read.questionInt("enter num1:");
        num2=read.questionInt("enter num2:");
        b=calc.subtraction(num1,num2);
        console.log("subtration="+b);
    }
    else if(op===3){
        num1=read.questionInt("enter num1:");
        num2=read.questionInt("enter num2:");
        c=calc.multiplication(num1,num2);
        console.log("multiplication="+c);
    }
    else if(op===4){
        num1=read.questionInt("enter num1:");
        num2=read.questionInt("enter num2:");
        d=calc.division(num1,num2);
        console.log("division="+d);
    }
    else if(op===5){
        break;
    }
    else{
        console.log("inavlid option");
    }
 }