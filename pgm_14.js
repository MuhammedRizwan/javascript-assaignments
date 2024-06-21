let read=require("readline-sync");

let n=read.questionInt("enter the size of array:");
let arr1=[];
let i,j,num;
for(i=0;i<n;i++){
    arr1[i]=[];
}
console.log("enter array 1:");
for(i=0;i<arr1.length;i++){
    for(j=0;j<arr1.length;j++){
        num=read.questionInt("");
        arr1[i][j]=num
    }
}
let arr2=[];
for(i=0;i<n;i++){
    arr2[i]=[];
}
console.log("enter array 2:");
for(i=0;i<arr2.length;i++){
    for(j=0;j<arr2.length;j++){
        num=read.questionInt("");
        arr2[i][j]=num;
    }
}
let arr3=[]
for(i=0;i<n;i++){
    arr3[i]=[]
}
for(i=0;i<arr3.length;i++){
    for(j=0;j<arr3.length;j++){
        arr3[i][j]=arr1[i][j]+arr2[i][j];
    }
}
console.log("sum of two array:");
let str="";
for(i=0;i<arr3.length;i++){
    for(j=0;j<arr3.length;j++){
        str+=arr3[i][j]+" ";
    }
    str+="\n"
}
console.log(str)