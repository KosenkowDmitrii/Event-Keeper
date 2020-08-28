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
// let days1 = [];
// days1.push(days);
console.log(days);
console.log(Object.keys(days));
console.log(Object.values(days));

let keys = Object.keys(days);
let values = Object.values(days);
  
    res.render('notes', { days, keys, value});
  });


module.exports = router;
