let read = require("readline-sync");

let mark= read.questionFloat('enter the mark: ');

if( mark>=100){
    console.log("entered is not correct");
}else if (mark>=90){
    console.log("A");
}else if(mark>=80){
    console.log("B");
}else if(mark>=70){
    console.log("C");
}else if (mark>=60){
    console.log("D");
}else if(mark>50){
    console.log("E");
}else{
    console.log("Failed");
}