var stoplight = document.getElementById("stoplight");
var readylight = document.getElementById("readylight");
var golight = document.getElementById("golight");

function btn1(){
    stoplight.style.backgroundColor = "red";  
    readylight.style.backgroundColor = "white";
    golight.style.backgroundColor = "white";
}

function btn2(){
    readylight.style.backgroundColor = "yellow"; 
    stoplight.style.backgroundColor = "white";
    golight.style.backgroundColor = "white";
}

function btn3(){
    golight.style.backgroundColor = "green";  
    stoplight.style.backgroundColor = "white";  
    readylight.style.backgroundColor = "white";
}