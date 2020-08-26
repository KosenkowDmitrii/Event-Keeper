function middleWare(app) {
  const express = require('express');
  const morgan = require('morgan');
  const path = require('path');
  const mongoose = require('mongoose');

  mongoose.connect('mongodb://localhost/eventKeeper', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  app.use(morgan('dev'));
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
  app.use(express.static(path.join(__dirname, '../public')));

  app.set('view engine', 'hbs');
  app.set('views', path.join(__dirname, '../views'));
}

module.exports = {middleWare};
