var body = document.querySelector("body");
var changemode = document.querySelector(".changemode");
function mode(){
    
    body.classList.toggle("light");
}

changemode.onclick = mode;