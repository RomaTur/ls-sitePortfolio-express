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
      required: [true, 'Укажите технологии']
    },
    href: {
      type: String, 
      default: '#',
      required: [true, 'Укажите ссылку на проект']
    }
  });

//просим mongoose сохранить модель для ее дальнейшего использования
mongoose.model('works', WorksSchema);