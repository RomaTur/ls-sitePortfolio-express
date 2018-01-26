<template lang="pug">
  .content
    h2.title Страница &laquo;Блог&raquo;
    .articles
      addArticle(
        @addArticle='addArticle'
      )
      Articles(
        :articles='articles'
        @removeArticle='removeArticle'
        )
    button.input__submit(value="Сохранить" @click='pushArticles') Сохранить
</template>

<script>
import { mapActions, mapGetters, mapMutations } from 'vuex'
import swal from 'sweetalert'

export default {
  methods: {
    ...mapActions('articles', ['fetchArticles', 'postArticles']),
    ...mapMutations('articles', ['addNewArticle', 'removeSavedArticle']),
    addArticle(article) {
      this.addNewArticle(article)
    },
    removeArticle(articleId) {
      this.removeSavedArticle(articleId)
    },
    pushArticles() {
      this.postArticles()
      swal({
        title: 'Отправлено!',
        icon: 'success',
        timer: 2500
      })
      document.querySelector('.swal-button-container').style.opacity = '0'
    }
  },
  mounted() {
    this.fetchArticles()
  },
  computed: {
    ...mapGetters('articles', ['articles'])
  },
  components: {
    addArticle: require('./AddArticle'),
    Articles: require('./Articles')
  }
}
</script>

<style lang="sass" src='./style.sass' scoped></style>


