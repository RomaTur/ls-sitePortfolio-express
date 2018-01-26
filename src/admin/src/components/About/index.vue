<template lang="pug">
    .content
        h2.title Страница &laquo;Обо мне&raquo;
        .skills__list
          skillsList(
            v-for='(skillType, index) in skillTypes'
            :skillGroup='skillType'
            :skills='skills'
            :key='index'
            @removeSkill="removeSkill"
            @addSkill="addSkill"
            @changePercents='changePercents'
          )
        .input__submit(@click='pushSkills') Сохранить
</template>

<script>

import { mapActions, mapGetters, mapMutations } from 'vuex'
import swal from 'sweetalert'

export default {
  data: () => ({
    skillTypes: ['Frontend', 'Backend', 'Workflow']
  }),
  methods: {
    ...mapActions('skills', ['fetchSkills', 'postSkills']),
    ...mapMutations('skills', ['addNewSkill', 'removeSavedSkill', 'changeSavedPercents']),
    removeSkill(skillId) {
      console.log(skillId)
      this.removeSavedSkill(skillId)
    },
    addSkill(newSkill) {
      this.addNewSkill(newSkill)
    },
    changePercents(newPercent, skillId) {
      this.changeSavedPercents({
        new: newPercent,
        id: skillId
      })
    },
    pushSkills() {
      this.postSkills()
      swal({
        title: 'Отправлено!',
        icon: 'success',
        timer: 2500
      })
      document.querySelector('.swal-button-container').style.opacity = '0'
    }
  },
  mounted() {
    this.fetchSkills()
  },
  computed: {
    ...mapGetters('skills', ['skills'])
  },
  components: {
    skillsList: require('./skills-list')
  }
}
</script>

<style lang="sass" src='./style.sass' scoped></style>
