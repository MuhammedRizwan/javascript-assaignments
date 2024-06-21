let read = require("readline-sync");

let number=read.questionInt("enter a day:");
let day;
switch (number){
    case 1:
        day="Sunday";
        break;
    case 2:
        day="Monday";
        break;
    case 3:
        day="Tuesday";
        break;
    case 4:
        day="Wednesday";
        break;
    case 5:
        day="Thursday";
        break;
    case 6:
        day="Friday";
        break;
    case 7:
        day="saterday";
        break;
    default:
        day="invalid entry";
}
console.log(day);
