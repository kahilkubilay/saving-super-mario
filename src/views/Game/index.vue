<template>
  <!-- <h2>{{ wordGuessTurn }}</h2>
  <h2>Selected Word: {{ selectedWord }}</h2>
  <h2>Guess Letter: {{ guessLetter }}</h2>
  <h2>Guess Word: {{ guessWord }}</h2>
  <h2>Guess Letter List: {{ guessLetterList }}</h2>
  <h2>Message: {{ assistantMessage }}</h2>
  <h2>List: {{ words }}</h2> -->

  <div class="game-area-capsule">
    <div class="game">
      <ul class="word">
        <li
          v-for="(letter, letterIndex) in selectedWord"
          :key="letterIndex"
          :class="{ spacePadding: letter === ' ' }">
          <span v-if="guessLetterList.includes(letter)">
            {{ letter }}
          </span>
          <span v-else-if="letter != ' '" class="secret"> _ </span>
        </li>
      </ul>

      <div class="guess-word">
        <input
          type="text"
          :disabled="wordGuessTurn"
          @input="writeGuess"
          v-model="guessWord" />
      </div>
    </div>
  </div>
  <Assistant :message="assistantMessage" />
  <Timer :time="time" :status="!wordGuessTurn" />
  <!-- TODO: burayı daha sonra aktifleştir -->
</template>

<script>
import Assistant from './components/Assistant.vue'
import Timer from './components/Timer.vue'

export default {
  props: ['id'],
  components: { Assistant, Timer },
  data() {
    return {
      uri: 'http://localhost:3000/sections/',
      selectedWord: '',
      guessLetter: '',
      guessWord: '',
      assistantMessage: '',
      time: 20,
      wordGuessTurn: true,
      words: [],
      guessLetterList: [],
      matchingLetters: [],
      guessWordList: [],
      details: {},
      messageBag: {
        guesTurn: 'you can.. take a guess',
        focus: 'Hey, focus. You used this letter before',
        tryAgain: 'try again!'
      }
    }
  },
  mounted() {
    fetch(this.uri + this.id)
      .then()
      .then((res) => res.json())
      .then((data) => {
        this.details = data
        this.getWords((this.details || {}).content || [])
      })
      .catch((err) => console.log(err))

    window.addEventListener('keydown', (e) => {
      this.wordGuessTurn && this.writeLetter(e)
    })
  },
  methods: {
    getWords(wordList) {
      this.words = wordList

      this.selectWord()
    },
    selectWord() {
      let words = this.words
      let wordListLength = words.length - 1
      let randomNumber = Math.round(Math.random() * wordListLength)

      this.selectedWord = words[randomNumber]
    },
    writeLetter(e) {
      let letter = e.key
      let guessList = this.guessLetterList
      const checkKey = /^[a-zA-Z,.']+$/

      if (checkKey.test(letter)) {
        if (this.selectedWord.includes(letter)) {
          this.wordGuessTurn = !this.wordGuessTurn
          this.assistantMessage = this.messageBag.guesTurn
        } else if (guessList.includes(letter)) {
          this.assistantMessage = this.messageBag.focus
        } else {
          this.assistantMessage = this.messageBag.tryAgain
        }

        this.guessLetter = letter
        guessList.push(letter)
      }
    },
    writeGuess(e) {
      if (this.guessWord === this.selectedWord) {
        let removedTrueWord = this.words.filter(
          (data) => data !== this.guessWord
        )

        this.words = removedTrueWord
        this.correctAnswer(removedTrueWord)
      } else {
        console.error('<< no, false >>')
      }
    },
    correctAnswer(words) {
      this.resetData()
      this.getWords(words)
    },
    wrongAnswer() {},
    resetData() {
      this.guessLetter = ''
      this.guessWord = ''
      this.guessLetterList = []
      this.wordGuessTurn = !this.wordGuessTurn
      // this.wordGuessTurn = false
    }
  }
}
</script>

<style scoped>
.game-area-capsule {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

.game {
}

ul.word {
  display: flex;
  margin-bottom: 5em;
}

.guess-word {
  display: flex;
}

.guess-word input {
  font-family: 'Courier New', Courier, monospace;
  font-size: 2em;
  font-weight: bold;
  text-align: center;
  border: 0;
  outline: 0;
  border-radius: 1em;
}

.guess-word input:focus {
  border: 3px solid orange;
}

ul.word li {
}

ul.word li.spacePadding {
  padding-right: 1.3em;
}

ul.word li span {
  font-size: 4em;
  font-family: 'Courier New', Courier, monospace;
}

ul.word li span.secret {
  font-size: 4em;
  margin: 0.1em;
  font-weight: bold;
}
</style>
