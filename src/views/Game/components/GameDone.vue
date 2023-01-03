<template>
  <div class="done-capsule">
    <div class="super-mario-icon">
      <img src="@/assets/img/icon/done-icon.png" alt="" />
    </div>
    <PreviewLoot :loot="loot" />
  </div>
</template>

<script>
import PreviewLoot from '@/components/PreviewLoot.vue'
export default {
  components: { PreviewLoot },
  props: ['loot']
}
</script>

<style scoped>
.done-capsule {
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  justify-content: center;
}
.super-mario-icon {
  width: 100%;
  height: 10.5em;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1em;
}

.super-mario-icon img {
  width: 6em;
  animation: extandWidth 2s forwards;
}

@keyframes extandWidth {
  0% {
    width: 0;
  }
  100% {
    width: 6em;
  }
}
</style>
