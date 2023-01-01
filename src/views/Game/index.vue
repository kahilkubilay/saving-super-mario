<template>
  <GoBack />

  <div class="game-area-capsule">
    <div class="game">
      <WordSection :word="selectedWord" :guess="guessLetterList" />
      <GuessWordInput
        :word="selectedWord"
        :turn="wordGuessTurn"
        @input="writeGuess"
        @guessWord="guessWord = $event" />
    </div>
  </div>

  <MiniAssistans :message="assistantMessage" />
  <Timer
    :time="time"
    :status="!wordGuessTurn"
    :life="life"
    @life="life = $event" />
  <GainGold :gold="gold" />
  <GameLife :lifes="life" />
</template>

<script>
import GainGold from '@/components/GainGold.vue'
import MiniAssistans from '@/components/MiniAssistant.vue'
import GoBack from '@/components/GoBack.vue'
import Timer from './components/Timer.vue'
import WordSection from './components/WordSection.vue'
import GuessWordInput from './components/GuessWordInput.vue'
import GameLife from './components/GameLife.vue'

export default {
  props: ['id'],
  components: {
    MiniAssistans,
    Timer,
    GoBack,
    WordSection,
    GuessWordInput,
    GainGold,
    GameLife
  },
  data() {
    return {
      uri: 'http://localhost:3000/sections/',
      selectedWord: '',
      guessLetter: '',
      guessWord: '',
      assistantMessage: '',
      time: 20,
      gold: 100,
      life: 7,
      wordGuessTurn: true,
      words: [],
      guessLetterList: [],
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
      this.words = wordList || this.words

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
    writeGuess() {
      if (this.guessWord === this.selectedWord) {
        let removedTrueWord = this.words.filter(
          (data) => data !== this.guessWord
        )

        this.words = removedTrueWord
        this.correctAnswer(removedTrueWord)
        console.info('<< yes, success >>')
      } else {
        console.error('<< no, false >>')
        // this.wrongAnswer()
      }
    },
    correctAnswer(words) {
      this.gold += 10
      this.resetData()
      this.getWords(words)
    },
    wrongAnswer() {
      this.assistantMessage = `correct answer is ${this.selectedWord}`
      this.resetData()
      this.getWords()
    },
    resetData() {
      this.guessLetter = ''
      this.guessWord = ''
      this.guessLetterList = []
      this.wordGuessTurn = !this.wordGuessTurn
    }
  },
  created() {
    this.unwatch = this.$watch('life', () => {
      this.wrongAnswer()
    })
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
  display: flex;
  flex-direction: column;
}
</style>
