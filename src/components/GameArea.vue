<template>
  <div class="game-area">
    <div class="hello-hero">
      <div class="brief-image-capsule">
        <img src="@/assets/img/icon/mushroom.png" alt="image of assistant" />
      </div>
      <div class="brief-text-capsule">
        <h2>Hey Hero...</h2>
        <p>{{ brief }}</p>
      </div>
    </div>
    <div class="game-loot">
      <div class="total-words">
        <img src="@/assets/img/icon/box.png" alt="">
        <span>{{ loot.box }}</span>
      </div>
      <div class="loot">
        <img src="@/assets/img/icon/star.png" alt="">
        <span>{{ loot.star }}</span>
      </div>
      <div class="heart">
        <img src="@/assets/img/icon/heart.png" alt="">
        <span>{{ loot.egg }}</span>
      </div>
    </div>
    <div class="start-game">
      <button @click="startGame">Start Game</button>
    </div>
  </div>
</template>

<script>
export default {
  props: ['words', 'id', "loot", "detail"],
  data() {
    return {
      word: '',
      brief: '',
      delay: 100,
      randomNumber: -1,
      totalWords: this.words.length
    }
  },
  methods: {
    startGame() {
      this.$router.push({ name: 'Game', params: { id: this.id } })
    },
    pushWords() {
      let index = 0;

      const returnTimer = () => {
        this.brief += this.detail[index];
        index++;

        if (index === this.detail.length || index >= this.detail.length) {
          clearInterval(timer)
        }
      }

      const timer = setInterval(returnTimer, this.delay);
    }
  },
  created() {
    this.unwatch = this.$watch('detail', (detailValue) => {
      if (detailValue) {
        this.pushWords()
        this.unwatch();
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
  background: #9ACD32;
  border-radius: 1em;
  box-shadow: .2em .2em .1em #fff;
}

.game-area .hello-hero {
  display: flex;
  align-items: center;
}

.brief-image-capsule img {
  width: 100px;
  margin-right: 1em;
  background: #FF4500;
  border-radius: 1.2em;
  padding: 1em;
}

.brief-text-capsule h2 {
  text-align: left;
  font-size: 2em;
  font-weight: bold;
  font-family: 'Courier New', Courier, monospace;
  color: #213547;
  margin-bottom: .3em;
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

.game-loot {
  display: flex;
  justify-content: center;

}

.game-loot div {
  display: flex;
  flex-direction: column;
  margin-right: 2.5em;
}

.game-loot img {
  height: 75px;
  margin-bottom: .5em;
}

.game-loot span {
  font-weight: bold;
  font-size: 1.5em;
}

.start-game {
  margin-top: 5em;
}

.start-game button {
  font-size: 2em;
  background: #9ACD32;
  color: #213547;
  border: none;
  border-radius: 2em;
  padding: .5em 1em;
  font-family: 'Courier New', Courier, monospace;
  font-weight: bold;
  box-shadow: .1em .1em 0 #fff;
  cursor: pointer;
}

.start-game button:active {
  box-shadow: none;
}
</style>
