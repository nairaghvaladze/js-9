document.body.style.backgroundColor="pink";
document.getElementById("res").style.backgroundColor = "Lightpink";
document.getElementById("res").style.borderColor = "Lightpink";
document.getElementById("res").style.fontWeight="500"

function fun(){

 
     var b= document.getElementById("email");
    
      var c= document.getElementById("password");
    if (b.value =="" || b.length == 0){
       
        document.getElementById("text3").innerHTML=" შეიყვანეთ ელ. ფოსტა";
        document.getElementById("text3").style.color="red";
        
        
    }else if(c.value =="" || c.length == 0) {
        document.getElementById("text3").innerHTML="";
        document.getElementById("text4").innerHTML="სწორია";
        document.getElementById("text4").style.color="green";
        document.getElementById("text5").innerHTML="შეიყვანეთ პაროლი";
        document.getElementById("text5").style.color="red";
    
       
    }else {
        document.getElementById("text5").innerHTML=""
        document.getElementById("text6").innerHTML="სწორია";
        document.getElementById("text6").style.color="green";
       document.getElementById("myform").reset();
    }
}