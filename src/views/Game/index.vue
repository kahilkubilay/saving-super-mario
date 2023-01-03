<template>
  <GoBack />

  <div class="game-area-capsule">
    <GameDone v-if="done" :loot="loot" />
    <div v-else class="game">
      <WordSection :word="selectedWord" :guess="guessLetterList" />
      <GuessWordInput
        :word="selectedWord"
        :turn="wordGuessTurn"
        @input="writeGuess"
        @guessWord="guessWord = $event" />
    </div>
  </div>

  <MiniAssistans :message="assistantMessage" />
  <Timer :status="!wordGuessTurn" :life="life" @life="life = $event" />
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
import GameDone from './components/GameDone.vue'

export default {
  props: ['id'],
  components: {
    MiniAssistans,
    Timer,
    GoBack,
    WordSection,
    GuessWordInput,
    GainGold,
    GameLife,
    GameDone
  },
  data() {
    return {
      uri: 'http://localhost:3000/sections/',
      selectedWord: '',
      guessLetter: '',
      guessWord: '',
      assistantMessage: '',
      gold: 100,
      life: 7,
      wordGuessTurn: true,
      done: false,
      words: [],
      guessLetterList: [],
      details: {},
      loot: {},
      messageBag: {
        guesTurn: 'you can.. take a guess',
        focus: 'Hey, focus. You used this letter before',
        tryAgain: 'try again!',
        done: 'yep Hero! You succeeded'
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
        this.loot = ((this.details || {}).loot || [])[0] || {}
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

      if (wordListLength === -1) {
        this.done = true
        this.assistantMessage = this.messageBag.done
      } else {
        let randomNumber = Math.round(Math.random() * wordListLength)

        this.selectedWord = words[randomNumber]
      }
    },
    writeLetter(e) {
      let letter = e.key
      let guessList = this.guessLetterList
      let isIncludes = guessList.includes(letter)
      const checkKey = /^[a-zA-Z,.']+$/

      if (checkKey.test(letter)) {
        if (this.selectedWord.includes(letter) && !isIncludes) {
          this.wordGuessTurn = !this.wordGuessTurn
          this.assistantMessage = this.messageBag.guesTurn
          this.guessLetter = letter

          guessList.push(letter)
        } else {
          this.assistantMessage = isIncludes
            ? this.messageBag.focus
            : this.messageBag.tryAgain
        }
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
      }
    },
    correctAnswer(words) {
      this.gold += 10
      this.resetData()
      this.getWords(words)
    },
    wrongAnswer() {
      this.wordGuessTurn = !this.wordGuessTurn
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
