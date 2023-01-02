<template>
  <div class="time-capsule" :class="{ opacity: !isStart }">
    <span>{{ returnTime }}</span>
  </div>
</template>

<script>
export default {
  props: ['status', 'life'],
  data() {
    return {
      guessTime: 10,
      isStart: false
    }
  },
  methods: {
    startTimer() {
      const delay = 1000
      this.isStart = true

      const returnTimer = () => {
        this.guessTime--

        if (this.guessTime === 0 || (!this.status && this.isStart)) {
          clearInterval(timer)

          !this.guessTime && this.lostLife()

          this.guessTime = 10
          this.isStart = false
        }
      }

      const timer = setInterval(returnTimer, delay)
    },
    lostLife() {
      const lastLifes = this.life - 1

      this.$emit('life', lastLifes)
    }
  },
  computed: {
    returnTime() {
      this.status && !this.isStart && this.startTimer()

      return this.guessTime
    }
  }
}
</script>

<style scoped>
.time-capsule {
  display: flex;
  justify-content: center;
  position: absolute;
  width: 1.563em;
  top: 0;
  right: 0;
  margin: 2em;
  padding: 1em 1.5em;
  background: #ff4500;
  border-radius: 2em;
}

.opacity {
  opacity: 0.5;
}

.time-capsule span {
  font-family: 'Courier New', Courier, monospace;
  font-size: 2em;
  font-weight: bold;
}
</style>
