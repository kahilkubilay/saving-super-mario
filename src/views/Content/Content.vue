<template>
  <GoBack />
  <GameArea
    :words="words"
    :id="id"
    :loot="loot"
    :detail="detail"
    @getDetail="detail = $event" />
  <LearningSection :words="words" />
</template>

<script>
import GameArea from './components/GameArea.vue'
import GoBack from '@/components/GoBack.vue'
import LearningSection from './components/LearningSection.vue'

export default {
  props: ['id'],
  components: { GameArea, GoBack, LearningSection },
  data() {
    return {
      words: [],
      title: '',
      detail: '',
      complete: false,
      loot: {},
      uri: 'http://localhost:3000/sections/' + this.id
    }
  },
  mounted() {
    fetch(this.uri)
      .then((res) => res.json())
      .then((data) => {
        let getData = data || {}
        this.words = getData.content || []
        this.title = getData.title || ''
        this.detail = getData.details || ''
        this.complete = getData.complete || false
        this.loot = (getData.loot || [])[0] || {}
      })
  }
}
</script>
