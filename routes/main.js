const express = require('express');
const router = express.Router();
const Day = require('../models/day');
const { db } = require('../models/day');


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


router.route('/') //Добавляем даты к каждому дню на main 
.get( async ( req, res ) => {
  let readDb = await Day.find();
  
  // console.log(readDb);

  let ObjOfEvents = {}; //Obj = date : event... ИВЕНТЫ ПО ДАТАМ ДЛЯ MAIN
  
  // const arrOfEvents = [];
  
  readDb.forEach( async (day) => { //Сравниваем даты в Main и DB, если совпадают, выводим 
    for( let i = 0; i < arrOfDates.length; i++)
    if(day.date[0] !== arrOfDates[i]) {
      // console.log('Херня')
    } else {
      // console.log('Огонь');
      // console.log(day.events[0]);
      ObjOfEvents[arrOfDates[i]] = day.events[0];
      };
    });
    
    let newDay = {};
    for(let i = 1; i < 15; i++) {
      // newDay[`Data${i}`] = arrOfDates[i-1];
      // newDay[`Event${i}`] = readDb[i].events[0];
        newDay[`Data${i}`] = arrOfDates[i-1];
        // if()
      // newDay[`Event${i}`] = readDb[i].events[0];
    };

    // console.log(newDay);
    // console.log(arrOfDates); //['2020-08-28', '2020-08-29'...]
    // console.log(ObjOfEvents); //{'2020-08-29': 'Третье событие'...}
const arr = [
  {date: newDay.Data1}, {date: newDay.Data2}, {date: newDay.Data3},  //Вывод дат на main
  {date: newDay.Data4}, {date: newDay.Data5}, {date: newDay.Data6},
  {date: newDay.Data7}, {date: newDay.Data8},
  {date: newDay.Data9}, {date: newDay.Data10}, {date: newDay.Data11},
  {date: newDay.Data12}, {date: newDay.Data13}, {date: newDay.Data14},
]
console.log(arr);
console.log(readDb);

 arr.forEach(day => {
  readDb.forEach(dbDay=>{
    if(day.date === dbDay.date[0]){
      if(day.events){
        day.events =[...day.events,...dbDay.events] 
        day.exist = true
      }else{
        day.events =[... dbDay.events]
        day.exist = true
      }
    }
  })
})
console.log(arr);
  res.render('main', {
    arr
  // Data1: newDay.Data1, Data2: newDay.Data2, Data3: newDay.Data3,  //Вывод дат на main
  // Data4: newDay.Data4, Data5: newDay.Data4, Data6: newDay.Data6,
  // Data7: newDay.Data7, Data8: newDay.Data8,
  // Data9: newDay.Data9, Data10: newDay.Data10, Data11: newDay.Data11,
  // Data12: newDay.Data12, Data13: newDay.Data13, Data14: newDay.Data14,
  // Event1: `* ${arrOfEvents[0]}`, Event4: `* ${arrOfEvents[1]}`, Event4: `* ${arrOfEvents[2]}`, //Вывод ивентов на main
  // Event4: `* ${arrOfEvents[3]}`, Event4: `* ${arrOfEvents[4]}`, Event4: `* ${arrOfEvents[5]}`,
  // Event6: `* ${arrOfEvents[3]}`, Event7: `* ${arrOfEvents[4]}`, Event8: `* ${arrOfEvents[5]}`,
  // Event9: `* ${arrOfEvents[3]}`, Event10: `* ${arrOfEvents[4]}`, Event11: `* ${arrOfEvents[5]}`,
  // Event12: `* ${arrOfEvents[3]}`, Event13: `* ${arrOfEvents[4]}`, Event14: `* ${arrOfEvents[5]}`,
});
});


router.route('/chosenDay')
.get((req,res)=>{
  res.render('chosenDay', {Data1: `${arrOfDates[0]}`, Data2: `${arrOfDates[1]}`, Data3: `${arrOfDates[2]}`,
  Data4: `${arrOfDates[3]}`, Data5: `${arrOfDates[4]}`, Data6: `${arrOfDates[5]}`,
  Data7: `${arrOfDates[6]}`, Data8: `${arrOfDates[7]}`,
  Data9: `${arrOfDates[8]}`, Data10: `${arrOfDates[9]}`, Data11: `${arrOfDates[10]}`,
  Data12: `${arrOfDates[11]}`, Data13: `${arrOfDates[12]}`, Data14: `${arrOfDates[13]}`});
})
.post( async (req, res) => {
  const { events, notes } = req.body;
  res.json( {events , notes} );
})


module.exports =  router;

