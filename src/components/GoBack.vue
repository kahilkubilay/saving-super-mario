<template>
  <div class="go-back-capsule" @click="this.$router.go(-1)">
    <span>Go Back</span>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
div.go-back-capsule {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  position: absolute;
  cursor: pointer;
  top: 1em;
  left: 1em;
}

span {
  font-family: 'Courier New', Courier, monospace;
  font-size: 1.2em;
  border: .2em solid #A4BE7B;
  padding: .5em;
  border-radius: .3em;
  background: #285430;
}

div.go-back-capsule:hover>span {
  border-color: #FF4500;
}
</style>