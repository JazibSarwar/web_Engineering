const myp1 = document.getElementById("p1");
//alert(myp1.innerText)
myp1.style.color= "red";
myp1.innerText =  "i am over the mon"
const mybtn = document.getElementById("btn");
mybtn.innerText = "Hellllo"
function sayHi(){
    alert("Hi there i am button")
}

mybtn.onclick = sayHi;