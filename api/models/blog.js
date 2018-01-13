'use strict';

const mongoose = require('mongoose'),
  Schema = mongoose.Schema,
  BlogSchema = new Schema({
    title: {
      type: String,
      required: [true, 'Укажите заголовок статьи']
    },
    text: {
      type: String,
      default: "-",
      required: [true, 'Укажите содержимое статьи']
    },
    date: {
      type: String, 
      default: "0.0.0",
      required: [true, 'Укажите дату публикации']
    }
  });

//просим mongoose сохранить модель для ее дальнейшего использования
mongoose.model('blog', BlogSchema);