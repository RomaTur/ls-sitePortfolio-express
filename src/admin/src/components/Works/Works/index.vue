<template lang="pug">
  .list
    Work(
      v-for='(work, index) in works'
      :key='index'
      :work='work'
      @removeWork='removeWork'
      )
      
</template>

<script>
export default {
  props: {
    works: Array
  },
  methods: {
    removeWork(workId) {
      this.$emit('removeWork', workId)
    }
  },
  components: {
    Work: require('../Work')
  }
}
</script>

<style lang="sass" src='./style.sass' scoped></style>
