const mongoose = require('mongoose');

module.exports = mongoose.model('day', {
  date: {
    type: Array,
    required: true
  },
  events: {
    type: Array,
    required: true
  },
  notes: Array
})
