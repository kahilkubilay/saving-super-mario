<template>
  <div class="word-capsule">
    <span
      v-for="(letter, letterIndex) in word"
      :key="letterIndex"
      :class="{ spacePadding: letter === ' ' }">
      {{ guess.includes(letter) ? letter : '_' }}
    </span>
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
  padding-right: 1.3em;
}

span {
  font-size: 3em;
  font-family: 'Courier New', Courier, monospace;
  font-weight: bold;
}
</style>
