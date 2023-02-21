let firstCard = Math.floor(Math.random() * 12) + 2
let secondCard = Math.floor(Math.random() * 12) + 2
sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let arrayCards = {firstCard,secondCard}

function startGame() {

    cardsEl.textContent = "Cards: " + firstCard + ", " + secondCard
    sumEl.textContent = "SUM: " + sum

    if (sum < 21) {
        message = "Do you want to draw a new card ?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You are out of the game !"
        isAlive = false
    }
    messageEl.textContent = message
}

function newCard(){
let nextCard = Math.floor(Math.random() *12) + 2
    sum += nextCard
    startGame()


}
