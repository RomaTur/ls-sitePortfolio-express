<template lang="pug">
  .input__area
    h3.title Добавить запись
    input.input__name(
      placeholder="Название" 
      v-model='article.title' 
      :error="validation.hasError('articleTitle')"
      )
    input.input__date(placeholder="Дата" v-model='article.date')
    textarea.input__text(placeholder="Содержание" v-model='article.text')

    button.input__add(value="Сохранить" @click='addArticle') Добавить
</template>

<script>
import { Validator } from 'simple-vue-validator'
export default {
  mixins: [require('simple-vue-validator').mixin],
  validators: {
    articleTitle: (value) => {
      return Validator.value(value).required('Название не может быть пустым')
    }
  },
  data: () => ({
    articleTitle: '',
    article: {
      id: 0,
      title: '',
      date: '',
      text: ''
    }
  }),
  methods: {
    addArticle() {
      this.articleTitle = this.article.title

      this.$validate().then(success => {
        if (!success) return
        if (this.article.date === '') this.article.date = '0.0.0'
        if (this.article.text === '') this.article.text = 'Пусто'
        this.$emit('addArticle', {
          id: 0,
          title: this.articleTitle,
          date: this.article.date,
          text: this.article.text
        })
        this.article = {
          title: '',
          text: '',
          date: ''
        }
      })
    }
  }
}
</script>

<style lang="sass" src='./style.sass' scoped></style>
