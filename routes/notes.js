const express = require('express');
const router = express.Router();
const Day = require('../models/day');

router.get('/', async (req, res) => {
  let daysFind = await Day.find();
  let check = daysFind.sort(function(a, b){let dateA=new Date(a.date), dateB=new Date(b.date)
    return dateA-dateB})
  console.log(check);
  let days = daysFind.reduce((acc, el) => {
    let dateKey = el.date[0];
    if (acc[dateKey]) {
      acc[dateKey] = [...acc[dateKey], ...el.notes];
      return acc;
    } else {
      acc[dateKey] = el.notes;
      return acc;
    }
  }, {});

  let keys = Object.keys(days);
console.log(keys);
  let data = keys.map((key) => {
    let res = {};
    res.date = key;
    res.event = days[key];
    if (days[key][0] !== '') {
      return res;
    }
  });
console.log(data);
  res.render('notes', { data });
});

module.exports = router;
