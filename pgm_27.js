const read=require("readline-sync")
let height=read.question("enter the height of you: ");
try{
    if(isNaN(height)){
        throw "notANumberError";
    }
    height=parseInt(height)
    if(height<0){
        throw "TinyHeightError"
    }
    if(height>8){
        throw "HugeHeightError"
    }else{
        console.log(height);
    }
}
catch(err){
    console.log(`Error: ${err}`);
}