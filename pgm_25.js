var library=[{title:"The road ahead",author:"Bill Gates",readingStatus:true},
{title:"Walter Isaacson",author:"Steve Jobs",readingStatus:true},
{title:"Mockingjay:The final Book of The Hunger Games",author:"Suzanne collins",readingStatus:false}]

for(i=0;i<library.length;i++){
    if(library[i].readingStatus==false){
       console.log("You still need to read '"+library[i].title+"' by "+library[i].author); 
    }
    else{
        console.log("Already read '"+library[i].title+"' by "+library[i].author);
    }
}