<template>
  <div class="heart-capsule">
    <div class="capsule" v-for="life in maxLife" :key="life">
      <img
        src="@/assets/img/icon/heart.png"
        alt="heart icon"
        :class="{ grayFilter: life > lifes }" />
    </div>
  </div>
</template>

<script>
export default {
  props: ['lifes'],
  data() {
    return {
      maxLife: 7
    }
  }
}
</script>

<style scoped>
.heart-capsule {
  display: flex;
  position: absolute;
  width: 10%;
  margin: 1em 2em;
  justify-content: center;
  right: 1em;
  bottom: 3em;
}

.capsule:not(:last-child) {
  margin-right: 0.4em;
}

.heart-capsule img {
  width: 25px;
}

.grayFilter {
  -webkit-filter: grayscale(100%);
  filter: grayscale(100%);
}
</style>
