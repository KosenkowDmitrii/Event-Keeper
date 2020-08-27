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
  await day.save();
  console.log(day);
});

module.exports = router;
