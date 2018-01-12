'use strict';

const mongoose = require('mongoose'),
  Schema = mongoose.Schema,
  SkillsSchema = new Schema({
    name: {
      type: String,
      required: [true, 'Укажите название']
    },
    percents: {
      type: Number,
      default: 0,
      required: [true, 'Укажите уровень владения']
    },
    type: {
      type: Number,
      required: [true, 'Укажите область применения']
    }
  });

//просим mongoose сохранить модель для ее дальнейшего использования
mongoose.model('skills', SkillsSchema);