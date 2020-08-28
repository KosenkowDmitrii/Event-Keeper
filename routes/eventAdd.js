const express = require('express');
const router = express.Router();
const Day = require('../models/day');

router.route('/')
.get((req, res) => {
  res.render('eventAdd');
})
.post( async (req, res) => {
  const { date, events, notes } = req.body;

  const day = new Day({
    date,
    events,
    notes,
  })
  if(date && events) {
    await day.save();
  }
  console.log(day);
});


router.route('/main')
.post((req, res) => {
  res.redirect('/main')
})


module.exports = router;
