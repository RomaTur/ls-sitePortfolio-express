'use strict';

const mongoose = require('mongoose'),
  Schema = mongoose.Schema,
  SkillsSchema = new Schema({
    name: {
      type: String,
      required: [true, 'Укажите название']
    },
    percents: {
      type: String,
      default: "0",
      required: [true, 'Укажите уровень владения']
    },
    type: {
      type: Number,
      required: [true, 'Укажите область применения']
    }
  });

mongoose.model('skills', SkillsSchema);