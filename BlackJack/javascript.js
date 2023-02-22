let sum = 0
let cards = []
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let isStarted = true
let playerName = "Filip"
let playerChips = 0

let playerEl = document.getElementById("player-el")
playerEl.textContent = playerName + ": " + playerChips

function startGame() {
    if (isStarted === true) {
        isAlive = true
        isStarted = false
        let firstNumber = getRandomCard()
        let secondNumber = getRandomCard()
        cards = [firstNumber, secondNumber]
        sum = firstNumber + secondNumber
        renderGame()
    }
}

function renderGame() {

    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        if (i === cards.length - 1) {
            cardsEl.textContent += cards[i]
        } else {
            cardsEl.textContent += cards[i] + ", "
        }
    }
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

function newCard() {
    if (isAlive === true && hasBlackJack !== true) {
        let nextCard = getRandomCard()
        sum += nextCard
        cards.push(nextCard)
        console.log(cards)
        renderGame()
    }
}

function getRandomCard() {
    let randomNumber = Math.floor(Math.random() * 13) + 1
    if (randomNumber > 10) {
        return 10
    } else if (randomNumber === 1) {
        return 11
    } else {
        return randomNumber
    }
}

function playAgain() {
    isStarted = true
    hasBlackJack = false
    startGame()

}
