
const mybtn = document.getElementById("btn");
function sayHi(){
    //alert("Hi there i am button")
    const ball = document.createElement("div")
    ball.className = "ball"
    const container = document.getElementById("container");
    container.appendChild(ball)

}

mybtn.onclick = sayHi;

