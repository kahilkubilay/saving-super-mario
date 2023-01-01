<template>
  <div class="game-area">
    <MainAssistant :brief="detail" />
    <PreviewLoot :loot="loot" />

    <div class="start-game">
      <button @click="startGame">Start Game</button>
    </div>
  </div>
</template>

<script>
import MainAssistant from '@/components/MainAssistant.vue'
import PreviewLoot from './PreviewLoot.vue'

export default {
  components: { MainAssistant, PreviewLoot },
  props: ['id', 'loot', 'detail'],
  methods: {
    startGame() {
      this.$router.push({ name: 'Game', params: { id: this.id } })
    }
  }
}
</script>

<style scoped>
.start-game {
  margin: 5em 0;
}

.start-game button {
  font-size: 2em;
  background: #9acd32;
  color: #213547;
  border: none;
  border-radius: 2em;
  padding: 0.5em 1em;
  font-family: 'Courier New', Courier, monospace;
  font-weight: bold;
  box-shadow: 0.1em 0.1em 0 #fff;
  cursor: pointer;
}

.start-game button:active {
  box-shadow: none;
}
</style>
