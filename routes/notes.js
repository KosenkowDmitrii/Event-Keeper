const express = require('express');
const router = express.Router();
const Day = require('../models/day');

router.get('/', async (req, res) => {
  let daysFind = await Day.find();
let days = daysFind.reduce((acc, el) => {
  let dateKey = el.date[0];
  if(acc[dateKey]) {
    acc[dateKey] = [...acc[dateKey], ... el.notes];
    return acc;
  } else {
    acc[dateKey] = el.notes;
    return acc;
  }
}, {})

let keys = Object.keys(days);

let data = keys.map(key => {
  let res = {}
  res.date = key
  res.event = days[key]
  return res
})
console.log(data);
  
    res.render('notes', { data });
  });


module.exports = router;
