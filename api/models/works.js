'use strict';

const mongoose = require('mongoose'),
  Schema = mongoose.Schema,
  WorksSchema = new Schema({
    title: {
      type: String,
      required: [true, 'Укажите заголовок статьи']
    },
    tech: {
      type: String,
      default: "-",
      required: [true, 'Укажите технологии']
    },
    href: {
      type: String, 
      default: "#",
      required: [true, 'Укажите ссылку на проект']
    },
    linkText: {
      type: String, 
      default: "Посмотреть",
      required: [true, 'Укажите название для кнопки']
    },
    img: {
      type: String, 
      default: "upload/works/loremGif.gif",
      required: [true, 'Укажите ссылку на картинку']
    }
  });

mongoose.model('works', WorksSchema);