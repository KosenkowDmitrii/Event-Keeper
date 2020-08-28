const { Telegraf } = require('telegraf')
const express = require('express');
// const Day = require('../models/day');

// const bot = new Telegraf(process.env.BOT_TOKEN)
// bot.start((ctx) => ctx.reply('Welcome'))
// bot.help((ctx) => ctx.reply('Send me a sticker'))
// bot.on('sticker', (ctx) => ctx.reply('👍'))

// bot.launch()
const Extra = require('telegraf/extra')
const fs = require('fs')


const bot = new Telegraf('1399660838:AAHXCi00k7A9hV4dBZjlbmwzpL0tAnD4LLI');


bot.start((ctx) => ctx.reply('QQWERQW'));
bot.hears(`Расписание на пятницу`, (ctx) => ctx.reply('Hey there'))

bot.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log('Response time: %sms', ms)
})



bot.on('text', (ctx) => ctx.reply('Привет Марсель!'))
bot.launch()



// function getDay(dates){
//     const day = await Day.findOne({ dates });
//     if ( day.date === dates){
//         return day;
//     } else {
//         ctx.reply('Нету ничего в этот день');
//     }
// }