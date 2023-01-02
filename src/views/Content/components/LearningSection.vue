<template>
  <div class="learning-section">
    <h2>In this section you will guess the following words.</h2>
    <ul>
      <li v-for="(word, i) in words" :key="i">
        {{ word }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['words']
}
</script>

<style scoped>
.learning-section {
  display: flex;
  flex-direction: column;
  background: #285430;
  border: 0.2em solid hsl(83, 34%, 61%);
  padding: 1.5em 5em;
  margin: 1em 5em;
}

.learning-section h2 {
  display: inherit;
  flex-direction: inherit;
  margin-bottom: 0.7em;
  padding-bottom: 0.7em;
  font-family: 'Courier New', Courier, monospace;
  font-size: 1.5em;
  border-bottom: 2px solid white;
}

.learning-section ul {
  display: inherit;
  justify-content: center;
  align-content: center;
  align-items: center;
  width: 50%;
  margin: 0 auto;
  flex-wrap: wrap;
  padding: 1em;
}

.learning-section ul li {
  margin: 0.5em;
}
</style>
