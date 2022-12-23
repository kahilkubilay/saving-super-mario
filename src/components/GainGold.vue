<template>
  <div class="gain-gold-capsule">
    <span
      class="coin-capsule"
      v-for="(gold, goldIndex) in maxCoin - gold.toString().length"
      :key="goldIndex">
      <img src="@/assets/img/icon/golden.png" />
    </span>
    <span
      class="gold"
      v-for="(golden, goldIndex) in (goldReference || gold)
        .toString()
        .split('')
        .map((item) => item)"
      :key="goldIndex">
      <span
        class="gold-piece"
        :class="{
          bottomToTop: !animationEffectArr[goldIndex] && animationEffect
        }">
        {{ golden }}
      </span>
    </span>
  </div>
</template>

<script>
export default {
  props: ['gold'],
  data() {
    return {
      maxCoin: 7,
      goldReference: 0,
      coins: 0,
      animationEffect: true,
      animationTime: 500 /**set some value on CSS side - 500 = .5s*/,
      animationEffectArr: []
    }
  },
  watch: {
    gold: {
      immediate: true,
      handler(newGold, oldGold) {
        let newStringGold = newGold.toString()
        let oldStringGold = (oldGold || '').toString()

        this.animationEffectArr = newStringGold
          .split('')
          .map(
            (goldPiece, goldPieceIndex) =>
              goldPiece === oldStringGold[goldPieceIndex]
          )

        this.animationEffect = true

        setTimeout(() => {
          this.goldReference = newGold
        }, this.animationTime / 2)

        setTimeout(() => {
          this.animationEffect = false
          this.goldReference = newGold
        }, this.animationTime)
      }
    }
  }
}
</script>

<style scoped>
@font-face {
  font-family: 'Press Start';
  src: local('Press Start'),
    url('@/assets/fonts/prstart.ttf') format('truetype');
}
.gain-gold-capsule {
  position: absolute;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  padding: 1em;
  margin: 1em;
}
img {
  width: 1em;
  padding: 0.1em;
}
.gold {
  letter-spacing: 0.3em;
  font-family: 'Press Start', 'Courier New', Courier, monospace;
}
.gold-piece {
  position: relative;
  padding-left: 0.1em;
}
.bottomToTop {
  animation: bottomToTop 0.5s ease infinite;
}
@keyframes bottomToTop {
  20% {
    bottom: 0.5em;
    opacity: 0.5;
  }
  40% {
    bottom: 1em;
    opacity: 0.1;
  }
  60% {
    bottom: -1em;
    opacity: 0;
  }
  80% {
    bottom: -0.5em;
    opacity: 0.5;
  }
  100% {
    bottom: 0em;
    opacity: 1;
  }
}
</style>
