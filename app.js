const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const registerRouter = require('./app/router/register');
const docRouter = require('./app/router/doc');

const db = mongoose.connect('mongodb://localhost:27017/userdb');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/api', registerRouter);
app.use('/api', docRouter);
app.listen(3000, () => {
  console.log('app running at port: 3000');
});
