<template>
  <div class="item-capsule">
    <img :src="complete ? star : flower" alt="icon of status" />
    <span>{{ text }}</span>
  </div>
</template>

<script>
export default {
  props: ['cover', 'text', 'complete'],
  data() {
    return {
      flower: require('@/assets/img/icon/flower.png'),
      star: require('@/assets/img/icon/colorful-star.png')
    }
  }
}
</script>

<style scoped>
.item-capsule {
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-align: center;
}

.item-capsule img {
  width: 1.875em;
  margin-right: 1em;
}

.item-capsule span {
  font-family: 'Courier New', Courier, monospace;
  font-size: 1.2em;
  font-weight: bold;
  color: #fff;
}
</style>
