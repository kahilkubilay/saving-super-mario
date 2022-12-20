<template>
  <div class="sections" v-if="sections.length">
    <ul>
      <li 
        v-for="section in sections" 
        :key="section.id" 
        @click="activeAnimation(section.id)">
        <SectionItem 
          :text="section.title" 
          :level="1" 
          :complete="section.complete"
        />
      </li>
    </ul>
  </div>
  <Loading v-else />
</template>

<script>
import Loading from './Loading.vue';
import SectionItem from './SectionsItem.vue';

export default {
  props: ['sections'],
  components: { Loading, SectionItem },
  methods: {
    activeAnimation(routerParams) {
      this.$emit('animationEffect', true)
      setTimeout(() => {
        this.$router.push({ name: 'Content', params: { id: routerParams } })
      }, 1000)
    }
  }
}
</script>

<style>
.sections {
  display: flex;
  width: 75%;
  margin: 0 auto;
}

.sections ul {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.sections ul li {
  border: .2em solid #A4BE7B;
  padding: 1.5em;
  margin: 0 .6em .6em 0;
  border-radius: .3em;
  background: #285430;
}

.sections ul li:hover {
  border-color: #FF4500;
  cursor: pointer;
}

.sections ul a {
  text-decoration: none;
}
</style>
