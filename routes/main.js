const express = require('express');
const router = express.Router();
const Day = require('../models/day');


function days(current) { //Вытягиваем динамические даты для main на 14 дней
  let week = new Array();
  let first = current.getDate();
  for (let i = 0; i < 14; i++) {
    week.push(
      new Date(current.setDate(++first))
    );
  }
  return week;
}
let input = new Date();
function convertDateToUTC(date) { //Меняем формат даты с UTC на ISO для преобразования в строку === инфо из db
  return new Date(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate());
};
let result = days(input);
const resArr = result.map(d => convertDateToUTC(d).toISOString().slice(0,10));
let arrOfDates = Object.values(resArr); //Массив с датами формата '2020-08-12';
console.log(arrOfDates);
router.route('/') //Добавляем даты к каждому дню на main
.get( async ( req, res ) => {
  let readDb = await Day.find();
  console.log(readDb);
  let ObjOfEvents = {}; //Obj = date : event
  const arrOfEvents = [];
  readDb.forEach( async (day) => {
    for( let i = 0; i < arrOfDates.length; i++)
    if(day.date[0] !== arrOfDates[i]) {
      // console.log('Херня')
    } else {
      // console.log('Огонь');
      // console.log(day.events[0]);
      ObjOfEvents[arrOfDates[i]] = day.events[0];
      arrOfEvents.push(`Event${i + 1}`, ObjOfEvents[arrOfDates[i]]);
      };
    });
    console.log(arrOfEvents);
    console.log(ObjOfEvents);
  res.render('main', {
  Data1: `${arrOfDates[0]}`, Data2: `${arrOfDates[1]}`, Data3: `${arrOfDates[2]}`,
  Data4: `${arrOfDates[3]}`, Data5: `${arrOfDates[4]}`, Data6: `${arrOfDates[5]}`,
  Data7: `${arrOfDates[6]}`, Data8: `${arrOfDates[7]}`,
  Data9: `${arrOfDates[8]}`, Data10: `${arrOfDates[9]}`, Data11: `${arrOfDates[10]}`,
  Data12: `${arrOfDates[11]}`, Data13: `${arrOfDates[12]}`, Data14: `${arrOfDates[13]}`,
  Event1: `* ${arrOfEvents[0]}`, Event4: `* ${arrOfEvents[1]}`, Event4: `* ${arrOfEvents[2]}`,
  Event4: `* ${arrOfEvents[3]}`, Event4: `* ${arrOfEvents[4]}`, Event4: `* ${arrOfEvents[5]}`,
});
});


router.route('/chosenDay')
.get((req,res)=>{
  res.render('chosenDay');
})
.post( async (req, res) => {
  const { events, notes } = req.body;
  res.json( {events , notes} );
})


module.exports = router;