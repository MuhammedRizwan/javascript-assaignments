var  read=require("readline-sync");

console.log("enter a string to reverse");
var my_string=read.question("");

try{
    let r_string;
    if(!isNaN(my_string)){
        my_string=parseInt(my_string);
        r_string=my_string.split("").reverse().join("");
    }else{
        r_string=my_string.split("").reverse().join("");
        console.log(`Reversed string is: ${r_string}`);
    }
}

catch(error){
    console.log(`Error : ${error.message}`);
}
finally{
    st=typeof(my_string)
    console.log(`type of input is: ${st}`);
}