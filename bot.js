const { Telegraf } = require('telegraf')
const Day = require('./models/day');
const mongoose = require('mongoose');
const Markup = require('telegraf/markup');

mongoose.connect('mongodb://localhost/eventKeeper', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const Extra = require('telegraf/extra')
const fs = require('fs')

async function finder() {
    let readDb = await Day.find({});
    return readDb;
}


const bot = new Telegraf('1399660838:AAHXCi00k7A9hV4dBZjlbmwzpL0tAnD4LLI');

let resp1 = "";
let resp2 = '';
let thisData = '';
let thisEvent = '';
let thisNote = '';


finder().then((res) => {
    thisData = res[0].date[0];
    thisEvent = res[0].events[0];
    thisNote = res[0].notes[0];
    resp1 = "" + thisData + " " + thisEvent + " " + thisNote;
})


finder().then((res) => {

    // console.log(res);
    res.forEach((e) => {
        resp2 += "" + e.date[0] + " " + e.events[0] + " " + e.notes[0] + " ";
    })
})


bot.start((ctx) => ctx.reply('Добро пожаловать, Господа епт'));
bot.help((ctx) => ctx.reply('Сейчас работают данные говнокоманды: 1)Кто самый красивый и прикольный на свете? 2) Ближайшие события 3) Все события'))




bot.help((ctx) => ctx.reply('Сейчас работают данные говнокоманды: 1)Кто самый красивый и прикольный на свете? 2) Ближайшие события 3) Все события 4) Дверь мне запили'))
bot.hears(`Кто самый красивый и прикольный на свете?`, (ctx) => ctx.reply('Жека'))
bot.hears(`Ближайшие события`, (ctx) => ctx.reply(resp1))
bot.hears(`Все события`, (ctx) => ctx.reply(resp2))
bot.hears(`Дверь мне запили`, (ctx) => ctx.reply('https://www.youtube.com/watch?v=WnhjDV5ZUL0'))
bot.hears(`Давай, запиливай`, (ctx) => ctx.reply('https://i.ytimg.com/vi/fRtKBQrmWRA/hqdefault.jpg'))



bot.use(async (ctx, next) => {
    const start = new Date()
    await next()
    const ms = new Date() - start
    console.log('Response time: %sms', ms)
})

bot.launch()

// const keyboard = [
//     [
//       {
//         text: 'Кто самый красивый и прикольный на свете?', // текст на кнопке
//         callback_data: 'firstQ' // данные для обработчика событий
//       }
//     ],
//     [
//       {
//         text: 'Ближайшие события',
//         callback_data: 'secondQ'
//       }
//     ],
//     [
//       {
//         text: 'Все события',
//         callback_data: 'thirdQ' 
//       }
//     ],
//     [
//       {
//         text: 'Хочу посмотреть видос про дверь мне запили',
//         url: 'https://www.youtube.com/watch?v=WnhjDV5ZUL0' //внешняя ссылка
//       }
//     ]
//   ];


//   bot.on('callback_query', (query) => {
//     const chatId = query.message.chat.id;

//     let resp = '';

//     if (query.data === 'firstQ') { // если кот
//       resp = 'Жека';
//     }

//     if (query.data === 'secondQ') { // если пёс
//       resp = resp1;
//     }

//     if (query.data === 'thirdQ') { // если пёс
//         resp = resp2;
//       }

//     if (resp) {
//       bot.sendMessage(chatId, resp, { // прикрутим клаву
//         reply_markup: {
//           inline_keyboard: keyboard
//         }
//       });
//     } else {
//       bot.sendMessage(chatId, 'Я это не знаю, оно мне и не надо', {
//         // прикрутим клаву
//         reply_markup: {
//           inline_keyboard: keyboard
//         }
//       });
//     }
//   });














//   бэкэнд


//   const keyboard = [
//     [
//       {
//         text: 'Все события', // текст на кнопке
//         callback_data: 'allEvents' // данные для обработчика событий
//       }
//     ]
//     [
//       {
//         text: 'События за неделю',
//         callback_data: 'weekEvents'
//       }
//     ]
//   ];


//   bot.on('callback_query', (query) => {
//     const chatId = query.message.chat.id;



//     if (query.data === 'Все события') { 

//         finder().then((res)=>{
//             thisData = res.date[0];
//             thisEvent = res.events[0];
//             thisNote = res.notes[0];
//         })
//     }


//     if (thisData) {
//       bot.sendPhoto(chatId, thisData,thisEvent,thisNote, { // прикрутим клаву
//         reply_markup: {
//           inline_keyboard: keyboard
//         }
//       });
//     } else {
//       bot.sendMessage(chatId, 'Непонятно, давай попробуем ещё раз?', {
//         // прикрутим клаву
//         reply_markup: {
//           inline_keyboard: keyboard
//         }
//       });
//     }
//   });

