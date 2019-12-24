const hangman_status = document.querySelector('#hangman-status')
const hangman_puzzle = document.querySelector('#hangman-puzzle')
const hangman_guesses = document.querySelector('#hangman-guesses')

let game1

window.addEventListener('keypress', (e) => {
    const guess = String.fromCharCode(e.charCode)
    game1.makeGuess(guess)
    render()
})

const render = () => {
    hangman_puzzle.innerHTML = ''
    hangman_status.textContent = game1.gameStatus
    hangman_guesses.textContent = game1.showGameStatus()

    game1.puzzle.split('').forEach((letter) => {
        const letterSpanEl = document.createElement('span')
        letterSpanEl.textContent = letter
        hangman_puzzle.appendChild(letterSpanEl)
    })
}

const startGame = async () => {
    const puzzle = await getPuzzle('2')
    game1 = new Hangman(puzzle, 5)
    render()
}

document.querySelector('#reset').addEventListener('click', startGame)

startGame()