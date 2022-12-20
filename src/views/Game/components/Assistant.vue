<template>
  <div class="assistant-capsule">
    <div class="assistant-image-capsule">
      <img src="@/assets/img/icon/mushroom.png" alt="image of assistant" />
    </div>
    <p v-if="message.length">{{ message }}</p>
    <p v-else>guess a letter</p>
  </div>
</template>

<script>
export default {
  props: ['message'],
}
</script>

<style scoped>
.assistant-capsule {
  display: flex;
  align-items: center;
  background: #9ACD32;
  padding: 1em;
  margin: 1em;
  position: absolute;
  left: 0;
  bottom: 0;
  border-radius: 1em;
}

.assistant-image-capsule {}

.assistant-image-capsule img {
  width: 75px;
  background: #FF4500;
  border-radius: 1.2em;
  padding: 1em;
  margin-right: 2em;
}

p {
  font-family: 'Courier New', Courier, monospace;
  font-weight: bold;
  font-size: 1.3em;
  color: #213547;
}
</style>