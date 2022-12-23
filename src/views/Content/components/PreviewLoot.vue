<template>
  <div class="game-loot">
    <div class="total-words">
      <img src="@/assets/img/icon/box.png" alt="view of box from awards"/>
      <span>{{ loot.box }}</span>
    </div>
    <div class="loot">
      <img src="@/assets/img/icon/star.png" alt="view of star from awards" />
      <span>{{ loot.star }}</span>
    </div>
    <div class="heart">
      <img src="@/assets/img/icon/egg.png" alt=" view of egg from awards" />
      <span>{{ loot.egg }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: ['loot']
}
</script>

<style>
.game-loot {
  display: flex;
  justify-content: center;
}

.game-loot div {
  display: flex;
  flex-direction: column;
  margin-right: 2.5em;
}

.game-loot img {
  height: 75px;
  margin-bottom: 0.5em;
}

.game-loot span {
  font-weight: bold;
  font-size: 1.5em;
}
</style>
