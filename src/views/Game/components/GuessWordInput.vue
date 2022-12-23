<template>
  <div class="guess-word">
    <input type="text" :disabled="turn" @input="getGuess" v-model="userGuess" />
  </div>
</template>

<script>
export default {
  props: ['turn', 'writeGuess', 'guessWord', 'word'],
  data() {
    return {
      userGuess: ''
    }
  },
  methods: {
    getGuess(e) {
      this.$emit('guessWord', this.userGuess)
      this.checkAnswer()
    },
    checkAnswer() {
      if (this.userGuess === this.word) {
        this.userGuess = ''
      }
    }
  }
}
</script>

<style>
.guess-word {
  display: flex;
  justify-content: center;
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
  border: 3px solid #ff4500;
}
</style>
