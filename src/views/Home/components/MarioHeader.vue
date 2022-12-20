<template>
  <div class="header-capsule">
    <h2>saving-super-mario</h2>
    <img src="@/assets/img/icon/main-logo.png" 
      alt="logo of saving-of-mario site" 
      :class="{ jump: animationEffect }" />
  </div>
</template>

<script>
export default {
  props: ['animationEffect']
}
</script>

<style scoped>
.header-capsule {
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 3em auto;
}

.header-capsule img {
  width: 150px;
  position: relative;
}

.header-capsule .jump {
  animation-name: jump;
  animation-duration: 1s;
  animation-fill-mode: forwards;
}

.header-capsule h2 {
  font-family: 'Courier New', Courier, monospace;
  font-size: 4em;
  font-weight: bold;
  text-transform: uppercase;
  margin-bottom: .2em;
}

@keyframes jump {
  0% {
    top: 0px;
  }

  50% {
    top: -60px;
    width: 100px;
    margin-bottom: 3.12em;
  }

  100% {
    top: 0px;
    width: 150px;
    margin-bottom: 0;
  }
}
</style>
