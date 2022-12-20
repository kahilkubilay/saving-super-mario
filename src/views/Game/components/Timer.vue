<template>
  <div class="time-capsule" :class="{ opacity: !isStart }">
    <span>{{ returnTime }}</span>
  </div>
</template>

<script>
export default {
  props: ['time', 'status'],
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

          this.isStart = this.status
          this.guessTime = 10
        }
      }

      const timer = setInterval(returnTimer, delay)
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
  width: 25px;
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
