let player = {
    name: "mansi",
    chips: 200
}
let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips

function getRandomCard() {
    let randomNumber = Math.floor(Math.random() * 13) + 1
    if (randomNumber === 1) {
        return 11
    } else if (randomNumber > 10) {
        return 10
    } else {
        return randomNumber
    }
}

function startGame() {
    isAlive = true
    hasBlackJack= false
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function renderGame() {
    // sumEl.textContent = "sum: " + sum
    sumEl.textContent = `Sum: ${sum}`
    cardsEl.textContent = `cards: `
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }
    if (sum < 21) {
        message = "Do you want to draw a new Card?"
    } else if (sum === 21) {
        message = "You've got BlackJack!"
        hasBlackJack = true
       }
    else {
        message = "You're out of the game"
        isAlive = false
    }
    messageEl.textContent = message
}

function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()
    }
}