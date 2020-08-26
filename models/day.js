const mongoose = require('mongoose');

module.exports = mongoose.model('day', {
  date: {
    type: Date,
    required: true
  },
  events: Array,
  notes: Array
})
