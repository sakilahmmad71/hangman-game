class Hangman {
    constructor(word, remainingGuess) {
    this.word = word.toLowerCase().split('')
    this.remainingGuess = remainingGuess
    this.guessLetter = []
    this.status = 'Playing'
    }

    get puzzle () {
        let puzzle = ''
    
        this.word.forEach((letter) => {
            if(this.guessLetter.includes(letter) || letter === ' ') {
                puzzle += letter
            } else {
                puzzle += '*'
            }
        })
    
        return puzzle
    }

    get gameStatus () {
        const finished = this.word.every(letter => this.guessLetter.includes(letter) || letter === ' ')
    
        if (this.remainingGuess === 0) {
            this.status = 'Failed'
        } else if (finished) {
            this.status = 'Finished'
        } else {
            this.status = 'Playing'
        }
    
        return this.status
    
    }

    showGameStatus () {
        if (this.status === 'Playing') {
            return `Remaining Guesses : ${this.remainingGuess} left`
        } else if (this.status === 'Failed') {
            return `Nice try! The word was "${this.word.join('')}"`
        } else {
            return 'Great you have guessed right'
        }
    }

    makeGuess (guess) {
        guess = guess.toLowerCase()
    
        const isUnique = !this.guessLetter.includes(guess)
        const isBadGuess = !this.word.includes(guess)
    
        if (this.status !== 'Playing') {
            return
        }
    
        if (isUnique) {
            this.guessLetter.push(guess)
        }
    
        if (isUnique && isBadGuess) {
            this.remainingGuess--
        }
    
        this.gameStatus
    }

}
