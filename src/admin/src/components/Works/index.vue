<template lang="pug">
  .content
    h2.title Страница &laquo;Мои работы&raquo;
    .works
      addWork(
        @addWork='addWork'
      )
      Works(
        :works='works'
        @removeWork='removeWork'
      )
    button.input__submit(@click='pushWorks') Сохранить
</template>

<script>
import { mapActions, mapGetters, mapMutations } from 'vuex'
import swal from 'sweetalert'

export default {
  methods: {
    ...mapActions('works', ['fetchWorks', 'postWorks']),
    ...mapMutations('works', ['addNewWork', 'removeSavedWork']),
    addWork(work) {
      this.addNewWork(work)
    },
    removeWork(workId) {
      this.removeSavedWork(workId)
    },
    pushWorks() {
      this.postWorks()
      swal({
        title: 'Отправлено!',
        icon: 'success',
        timer: 2500
      })
      document.querySelector('.swal-button-container').style.opacity = '0'
    }
  },
  mounted() {
    this.fetchWorks()
  },
  computed: {
    ...mapGetters('works', ['works'])
  },
  components: {
    addWork: require('./addWork'),
    Works: require('./Works')
  }
}
</script>

<style lang="sass" src='./style.sass' scoped></style>


