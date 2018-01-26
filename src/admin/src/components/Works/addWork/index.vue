<template lang="pug">
  .input__area
    h3.title Добавить работу
    input.input(
      v-model='title' 
      placeholder="Название проекта" 
      :error="validation.hasError('title')"
      required
      )
    input.input(v-model='tech' placeholder="Технологии" required)
    input.input(v-model='href' placeholder="Ссылка" required)
    input.input(v-model='linkText' placeholder="Название ссылки" required)
    form(id='imageForm' name="imageForm" enctype='multipart/form-data' method='post')
      label.input.input__file(for='files')
        .input__file-logo
        .input__file-text Загрузить Картинку
        input#files(type='file' name='picFile' v-on:change='fileSelect')
      #list
      button.input__add(type="submit" @click='addWork') Добавить
    
</template>

<script>
import { Validator } from 'simple-vue-validator'
export default {
  mixins: [require('simple-vue-validator').mixin],
  validators: {
    title: (value) => {
      return Validator.value(value).required('Название не может быть пустым')
    }
  },
  data: () => ({
    title: '',
    tech: '',
    linkText: '',
    href: '',
    img: '../upload/works/loremGif.gif'
  }),
  methods: {
    addWork() {
      this.$validate().then(success => {
        console.log('click')
        if (!success) return
        if (this.tech === '') this.tech = 'HTML, CSS, JAVASCRIPT'
        if (this.href === '') this.href = 'http://romatur.xyz'
        if (this.linkText === '') this.linkText = 'Посетить'
        if (this.img === '') this.img = '../upload/works/loremGif.gif'
        // this.loadImage()
        this.$emit('addWork', {
          id: 0,
          title: this.title,
          tech: this.tech,
          href: this.href,
          linkText: this.linkText,
          img: this.img
        })
        this.title = ''
        this.tech = ''
        this.href = ''
        this.img = '../upload/works/loremGif.gif'
        this.linkText = ''
      })
    },
    fileSelect(evt) {
      var f = evt.target.files // FileList object
      // Loop through the FileList and render image files as thumbnails.
      // files.forEach(f => {
      //   // Only process image files.
      if (!f[0].type.match('image.*')) {
        // continue
        console.log('not match')
      }
      var reader = new FileReader()
      // Closure to capture the file information.
      reader.onload = (function(theFile) {
        return function(e) {
          // Render thumbnail.
          const list = document.getElementById('list')
          list.innerHTML = ['<img src="', e.target.result, '" title="', escape(theFile.name), '"/>'].join('')
          // var imgSrc = e.target.result
        }
      })(f)
      // Read in the image file as a data URL.
      reader.readAsDataURL(f[0])
      console.log(f[0])
      console.log(f[0].name)
      this.img = '../upload/works/' + f[0].name
      // })
      this.img = '../upload/works/' + f[0].name
    }
  },
  mounted() {
    var form = document.forms.namedItem('imageForm')

    form.addEventListener('submit', event => {
      var files = document.getElementById('files').files[0]
      event.preventDefault()
      console.log(files)
      var oData = new FormData(form)
      console.log(oData)
      var oReq = new XMLHttpRequest()
      oReq.open('POST', '/admin/works/file', true)
      oReq.onload = function(oEvent) {
        if (oReq.status === 200) {
          console.log('отправилось')
        }
      }
      oReq.send(oData)
    })
  }
}
</script>

<style lang="sass" src='./style.sass' scoped></style>


