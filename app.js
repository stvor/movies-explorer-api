const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
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

app.use(bodyParser.json());
app.use(routes);

app.listen(PORT, () => {
  console.log(`App listening ${PORT} port`);
});
