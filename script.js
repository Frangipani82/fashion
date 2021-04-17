let mody = document.lastModified;
document.getElementById("modified").innerHTML = mody;

document.body.style.backgroundColor = "#f5f7fa";
document.body.style.color = "#303133";
let mail = document.getElementById("mail");
mail.style.color = "#0000EE";
let ins = document.getElementById("insider");
let tick = document.getElementById("ticket");
let dres = document.getElementById("dressing");
ins.style.border = "2px solid #303133";
tick.style.border = "2px solid #303133";
dres.style.border = "2px solid #303133";
let newyork = document.getElementById("newy");
newyork.style.color = "#0000EE";
let main = document.getElementById("maintitle");
main.style.color = "#730ead";

document.getElementById("moon").addEventListener("click", function() {
document.body.style.backgroundColor = "#303133";
document.body.style.color = "#f5f7fa";
ins.style.border = "2px solid #f5f7fa";
tick.style.border = "2px solid #f5f7fa";
dres.style.border = "2px solid #f5f7fa";
newyork.style.color = "#7b7bdb";
mail.style.color = "#7b7bdb";  
main.style.color = "#c38de0";
});

document.getElementById("sun").addEventListener("click", function() {
document.body.style.backgroundColor = "#f5f7fa";
document.body.style.color = "#303133";
ins.style.border = "2px solid #303133";
tick.style.border = "2px solid #303133";
dres.style.border = "2px solid #303133";
newyork.style.color = "#0000EE";
mail.style.color = "#0000EE";
main.style.color = "#730ead";
});


let firstp = document.getElementById("firstimage");
let firstt = document.getElementById("first");
firstt.style.display = "none";
firstp.addEventListener("click", function() {
    if(firstt.style.display == "none") {
        firstt.style.display = "block";
    } else {
        firstt.style.display = "none";
    }
    });


let secondp = document.getElementById("secondimage");
let secondt = document.getElementById("second");
secondt.style.display = "none";
secondp.addEventListener("click", function() {
    if(secondt.style.display == "none") {
        secondt.style.display = "block";
    } else {
        secondt.style.display = "none";
    }
});
    
let thirdp = document.getElementById("thirdimage");
let thirdt = document.getElementById("third");
thirdt.style.display = "none";
thirdp.addEventListener("click", function() {
    if(thirdt.style.display == "none") {
        thirdt.style.display = "block";
    } else {
        thirdt.style.display = "none";
    }
});



