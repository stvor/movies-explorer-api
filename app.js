const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const { MONGO_URL } = require('./config');

const app = express();
const { PORT = 3000 } = process.env;

mongoose.connect(MONGO_URL, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

app.use(routes);

app.listen(PORT, () => {
  console.log(`App listening ${PORT} port`);
});
