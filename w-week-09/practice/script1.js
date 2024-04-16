// localStorage.setItem('item',value)
let value = localStorage.getItem('COUNTER') || 0

const plusButton = document.getElementById("plus");
const minusButton = document.getElementById("minus");
const div = document.getElementById("value");
div.innerText = value
function plus() {
    value++;
    div.innerHTML = value;
    localStorage.setItem('COUNTER',value)
}

function minus() {
    value--;
    div.innerHTML = value;
    localStorage.setItem('COUNTER',value)
}

plusButton.addEventListener("click", plus);
minusButton.addEventListener("click", minus);
