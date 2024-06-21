const read=require("readline-sync");
function main(){
    function getArray(n){
        let arr=[];
        let num;
        for(i=0;i<n;i++){
            arr[i]=[];
        }
        for(i=0;i<arr.length;i++){
            for(j=0;j<arr.length;j++){
                num=read.questionInt();
                arr[i][j]=num;
            }
        }
        return arr;
    }
    function addArray(arr1,arr2){
        let arr=[]
        for(i=0;i<n;i++){
            arr[i]=[];
        }
        for(i=0;i<arr1.length;i++){
            for(j=0;j<arr1[i].length;j++){
                arr[i][j]=arr1[i][j]+arr2[i][j];
            }
        }
        return arr;
    }
    function getDisplay(sum){
        console.log("sum of 2 array are:");
        for(i=0;i<n;i++){
            console.log(sum[i].join(" "));
        }
    }
    let n=read.questionInt("enter the size of array: ");
    console.log("array 1:");
    let arr1=getArray(n);
    console.log("array 2:");
    let arr2=getArray(n);
    let sum=addArray(arr1,arr2);
    getDisplay(sum);

    
}
main()