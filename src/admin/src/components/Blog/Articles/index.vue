<template lang="pug">
  .articles__area
    Article(
      v-for='(article, index) in articles'
      :key='index'
      :article='article'
      @removeArticle='removeArticle'
      )
      
</template>

<script>
export default {
  props: {
    articles: Array
  },
  methods: {
    removeArticle(articleId) {
      this.$emit('removeArticle', articleId)
    }
  },
  components: {
    Article: require('../Article')
  }
}
</script>

<style lang="sass" src='./style.sass' scoped></style>
