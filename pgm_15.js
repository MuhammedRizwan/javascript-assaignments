function main(){
    var read=require("readline-sync");
    function getArray(){
        num=read.questionInt();
        arr.push(num)
    }
    function displayArray(){
        console.log("array elements are:"+arr.toString());
    }
    var num,i;
    var arr=[];
    let n=read.questionInt("enter limit: ");
    console.log("enter array elements:");
    for(i=0;i<n;i++){
        getArray();
    }
    displayArray();
    
}
main();