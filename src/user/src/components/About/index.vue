<template lang="pug">
.about
    - var title = 'Обо мне'
    - var secClass = 'div class="menu__line"'
    - var page = 'about'
    include ../pug/common/about/header
    .menu
        ul.menu__list
            router-link(
               v-for="(page, index) in pages"
               :key="index"
               tag="li"
               :to="page.route"
               exact
             ).menu__item
              .menu__line
              a.menu__link {{page.name}}
              .menu__line
    
    include ../pug/common/about/content
    .footer
      include ../pug/common/about/footer
      Footer
</template>

<script>

import { mapActions, mapGetters, mapMutations } from 'vuex'
import smoothScrollClick from '../../modules/smothScrollClick.js'
import fullMenu from '../../modules/fullMenu'
import mapInit from '../../modules/maps'
import skillProgressInit from '../../modules/skillProgressInit'
import isScroll from '../../modules/isScroll'
import jump from 'jump.js'
import animatePreloader from '../../modules/animatePreloader'

export default {
    data: () => ({
    pages: [
      { name: 'Мои работы', route: '/works' },
      { name: 'Блог', route: '/blog' },
      { name: 'Обо мне', route: '/about' },
      { name: 'Авторизация', route: '/' },
    ],
    skillTypes: [
      {
      name: 'Frontend',
      type: 1
      },
      {
      name: 'Backend',
      type: 3
      },
      {
      name: 'Workflow',
      type: 2
      }
    ]
  }),
  methods: {
    ...mapActions('skills', ['fetchSkills'])
  },
  mounted(){
    this.fetchSkills()
    animatePreloader()
    isScroll(true)
    smoothScrollClick('header__arrow-img', 'content', undefined, jump);
    fullMenu('hamburger', 'menu');
    mapInit('map');
  },
  computed: {
    ...mapGetters('skills', ['skills'])
  },
  components: {
    Footer: require('../Footer')
  }
}
</script>

<style lang="sass" src='../sass/about.sass' scoped></style>

