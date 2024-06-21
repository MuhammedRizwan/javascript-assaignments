let read=require("readline-sync")
class Area{
    circle(r){
        const pi=3.14
        let area=pi*(r*r);
        console.log("area of the circle: "+area);
    }
    square(s){
        this.area=s*s;
        console.log("area of the square: "+this.area);
    }
    rectangle(l,b){
        this.area=l*b
        console.log("area of the rectangle: "+this.area);
    }
    triangle(ba,h){
        this.area=(ba*h)/2;
        console.log("area of the traingle: "+this.area);

    }
}
class Myclass extends Area{
    Main(){
        while(true){
            console.log(`
                        1.Circle
                        2.Square
                        3.Rectangle
                        4.Traingle
                        5.Exit        `); 
            let op=read.questionInt("enter an option: ")
            if(op===1){
                this.circle()
            }
            else if(op===2){
                this.square()
            }
            else if(op===3){
                this.rectangle()
            }
            else if(op===4){
                this.triangle()
            }
            else if(op==5){
                break;
            }
            else{
                console.log("invalid");
            }
        }
    }
    circle(){
        var r=read.questionFloat("enter the raius of circle: ");
        super.circle(r);
    }
    square(){
        var s=read.questionFloat("enter the side of square: ");
        super.square(s);
    }
    rectangle(){
        var l=read.questionFloat("enter the length: ")
        var b=read.questionFloat("enter the breadth: ")
        super.rectangle(l,b);
    }
    triangle(){
        var ba=read.questionFloat("enter the base : ")
        var h=read.questionFloat("enter the height : ")
        super.triangle(ba,h)
    }
}

a=new Myclass()
a.Main()
