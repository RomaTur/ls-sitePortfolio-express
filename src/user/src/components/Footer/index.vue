<template lang="pug">
  .info
    include ../pug/config/mixins
    .info__links
        ul.info-pages
            router-link(
               v-for="(page, index) in pages"
               :key="index"
               tag="li"
               :to="page.route"
               exact
             ).info-pages__item
              a.info-pages__link {{page.name}}
        ul.info-social
            +listItem('', 'info-social', 'https://vk.com/id_r0mashka', 'vk_round')
            +listItem('', 'info-social', 'https://github.com/RomaTur', 'github_round')
            +listItem('', 'info-social', 'https://twitter.com/RoMan_111', 'twitter_round')
    .info__desc
        .info__about Будем на связи, буду рад сотрудничеству. 
        .info__credits © Роман Турусов | создано с любовью | 2018

</template>

<script>
export default {
  data: () => ({
    pages: [
      { name: 'Мои работы', route: '/works' },
      { name: 'Блог', route: '/blog' },
      { name: 'Обо мне', route: '/about' },
      { name: 'Авторизация', route: '/' },
    ]
  })
}
</script>

<style lang="sass" src='../sass/layout/adjustment.sass' scoped></style>

