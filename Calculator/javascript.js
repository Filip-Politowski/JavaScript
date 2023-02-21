let num1 = 8
let num2 = 2
let sumEl = document.getElementById("sum-el")

document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2


function add() {
    let result = num1 + num2
    sumEl.textContent = "SUM: " + result

}

function subtract() {
    let result = num1 - num2
    sumEl.textContent = "SUM: " + result
}
function multiply(){
    let result = num1 * num2
    sumEl.textContent = "SUM: " + result
}
function divide(){
    let result = num1 / num2
    sumEl.textContent = "SUM: " + result
}