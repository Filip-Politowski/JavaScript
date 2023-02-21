
let userName = "per"
let message = "You have tree new notifications"



let previousEntries = document.getElementById("previous-entries")
let count = 0
let countElement = document.getElementById("count-el")
document.getElementById("count-el").innerText = count;

function increment(){
    count++
   countElement.innerText = count
}
function reset(){
    count = 0
    countElement.innerText = count

}
function save(){
    previousEntries.textContent += " " +  count +" -"
}




