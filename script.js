const score0El = document.querySelector("#score--0")
const score1El = document.querySelector("#score--1")
const namePlayer0 = document.querySelector(".name--0")
const namePlayer1 = document.querySelector(".name--1")
const current0El = document.getElementById("current--0")
const current1El = document.getElementById("current--1")
const player0 = document.querySelector(".player--0")
const player1 = document.querySelector(".player--1")
const diceEl = document.querySelector(".dice")
const btnNew = document.querySelector(".btn--new")
const btnRoll = document.querySelector(".btn--roll")
const btnHold = document.querySelector(".btn--hold")



/// Starting Condition
let score, currentScore, activePlayer, playing
const init = function () {
    score = [0,0]
    currentScore = 0
    activePlayer = 0
    playing = true

    current0El.textContent = 0
    current1El.textContent = 0
    score0El.textContent = 0
    score1El.textContent = 0
    player0.classList.add("player--active")
    player1.classList.remove("player--active")
    player0.classList.remove("player--winner")
    player1.classList.remove("player--winner")
    diceEl.classList.add("hidden")
}

init()

/// Dice Roll Functionality

const switchPlayer = function(){
    document.getElementById(`current--${activePlayer}`).textContent = 0
    currentScore = 0
    activePlayer = activePlayer === 0 ? 1 : 0
    player0.classList.toggle("player--active")
    player1.classList.toggle("player--active")
}


btnRoll.addEventListener("click", function() {
    if (playing){
    /// random number dice
    const dice = Math.floor(Math.random()*6)+1

    /// display dice
    diceEl.classList.remove("hidden")
    diceEl.src = `./images/dice-${dice}.png`

    /// check if dice get number 1 = switch player
    if (dice != 1){
        /// add dice to current score
        currentScore += dice
        document.getElementById(`current--${activePlayer}`).textContent = currentScore
    } else {
        /// switch to next player
        switchPlayer()
    }
}
})

btnHold.addEventListener("click", function(){
    // add current score to active player score
    if (playing){
        score[activePlayer] += currentScore
        document.getElementById(`score--${activePlayer}`).textContent = score[activePlayer]
        // check if player score is >= 100 than finish teh game
        if (score[activePlayer] >= 20){
            document.querySelector(`.player--${activePlayer}`).classList.add("player--winner")
            document.querySelector(`.player--${activePlayer}`).classList.remove("player--active")
            playing = false
        } else {
            // switch to the next player
            switchPlayer()
        }
    }
})

btnNew.addEventListener("click", init)