function compute(){

    var p= document.getElementById("principal").value;

    if( p<=0){
        alert("Enter a positive number")
    }
    if(p == null){
        alert("Enter a positive number")
    }

    var r= document.getElementById("rate").value;
    var t= document.getElementById("noy").value;
    
    y= new Date().getFullYear() + parseInt(t);

    var SI= (p*r*t)/100;
    if(p>0){

    //document.getElementById("result").value = "If you deposite "+p+", at an interest rate of "+r+" You will recieve "+SI;
    document.getElementById("ans1").innerHTML = "If you deposite ";
    document.getElementById("s1").innerHTML = p+"," ;
    document.getElementById("ans2").innerHTML = "At an interest rate of ";
    document.getElementById("s2").innerHTML = r+"%" ;
    document.getElementById("ans3").innerHTML = "You will recieve ";
    document.getElementById("s3").innerHTML = SI+"." ;
    document.getElementById("ans4").innerHTML = "In the year ";
    document.getElementById("s4").innerHTML = y ;

    }

    }
        