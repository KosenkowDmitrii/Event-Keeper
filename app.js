const express = require('express');
const app = express();
const { middleWare } = require('./middleware');
const notesRouter = require('./routes/notes');
const eventAddRouter = require('./routes/eventAdd');
const mainRouter = require('./routes/main');

middleWare(app);

app.use('/notes', notesRouter);
app.use('/main', mainRouter);
app.use('/eventAdd', eventAddRouter);

app.get('/', (req, res) => {
  res.redirect('/main');
})

module.exports = app;
