<template>
  <div class="word-capsule">
    <div v-for="(letter, letterIndex) in word" :key="letterIndex">
      <span v-if="guess.includes(letter)">{{ letter }}</span>
      <span
        v-else-if="letter === ' '"
        :class="{ spacePadding: letter === ' ' }"></span>
      <span v-else>_</span>
    </div>
  </div>
</template>

<script>
export default {
  props: ['word', 'guess']
}
</script>

<style scoped>
.word-capsule {
  display: flex;
  width: 100%;
  justify-content: center;
  margin-bottom: 3em;
  letter-spacing: 1em;
}

.spacePadding {
  margin-right: 0.9em;
}

span {
  font-size: 3em;
  font-family: 'Courier New', Courier, monospace;
  font-weight: bold;
}
</style>
