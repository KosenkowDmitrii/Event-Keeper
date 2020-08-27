const mongoose = require('mongoose');

module.exports = mongoose.model('day', {
  date: {
    type: Array,
    required: true
  },
  events: Array,
  notes: Array
})
