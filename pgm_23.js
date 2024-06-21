let read=require("readline-sync")
class main{
    getArray(arr){
        let i,j,num;
        console.log("enter the values:");
        for(i=0;i<arr.length;i++){
            for(j=0;j<arr.length;j++){
                num=read.questionInt()
                arr[i][j]=num;
            }
        }
        return arr;
    }
    displayArray(arr){
        console.log("Array Elements are: ");
        for(i=0;i<arr.length;i++){
            console.log(arr[i].join(" "));
        }

    }
   
}
arr=[];
let n=read.questionInt("enter the size : ");
for(i=0;i<n;i++){
    arr[i]=[];
}
let a=new main()
b=a.getArray(arr,n)
a.displayArray(b)