<template>
  <div class="home">
    <MarioHeader :animationEffect="activeEffect" />
    <Sections :sections="sections" @animationEffect="activeEffect = $event" />
  </div>
</template>

<script>
import MarioHeader from "./components/MarioHeader.vue";
import Sections from "./components/Sections.vue";

export default {
  name: "HomeView",
  components: { MarioHeader, Sections },
  data() {
    return {
      uri: "http://localhost:3000/sections",
      activeEffect: false,
      sections: [],
    };
  },
  mounted() {
    fetch(this.uri)
      .then((res) => res.json())
      .then((data) => (this.sections = data))
      .catch((err) => console.log(err));
  },
};
</script>
