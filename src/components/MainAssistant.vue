<template>
  <div class="hello-hero">
    <div class="brief-image-capsule">
      <img src="@/assets/img/icon/mushroom.png" alt="image of assistant" />
    </div>
    <div class="brief-text-capsule">
      <h2>Hey Hero...</h2>
      <p>{{ detail }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ['brief'],
  data() {
    return {
      detail: '',
      delay: 100,
      test: ''
    }
  },
  methods: {
    pushWords() {
      let index = 0

      const returnTimer = () => {
        this.detail += this.brief[index]
        index++

        if (index === this.brief.length || index >= this.brief.length) {
          clearInterval(timer)
        }
      }

      const timer = setInterval(returnTimer, this.delay)
    }
  },
  created() {
    this.unwatch = this.$watch('brief', (briefValue) => {
      if (briefValue) {
        this.pushWords()
        this.unwatch()
      }
    })
  }
}
</script>

<style scoped>
.hello-hero,
.section-info {
  display: flex;
  width: 750px;
  margin: 4em auto;
  padding: 1.3em;
  background: #9acd32;
  border-radius: 1em;
  box-shadow: 0.2em 0.2em 0.1em #fff;
}

.game-area .hello-hero {
  display: flex;
  align-items: center;
}

.brief-image-capsule img {
  width: 100px;
  margin-right: 1em;
  background: #ff4500;
  border-radius: 1.2em;
  padding: 1em;
}

.brief-text-capsule h2 {
  text-align: left;
  font-size: 2em;
  font-weight: bold;
  font-family: 'Courier New', Courier, monospace;
  color: #213547;
  margin-bottom: 0.3em;
}

.brief-text-capsule p {
  font-weight: bold;
  font-size: 1.3em;
  color: #213547;
  font-family: 'Courier New', Courier, monospace;
  text-align: left;
}

.section-info h2 {
  font-size: 2em;
}
</style>
