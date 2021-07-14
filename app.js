const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const routes = require('./routes');
const { requestLogger, errorLogger } = require('./middlewares/logger');
const errorHandler = require('./middlewares/error-handler');
const { MONGO_URL } = require('./config');

const app = express();
const { PORT = 3000 } = process.env;

mongoose.connect(MONGO_URL, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

app.use(requestLogger);
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(routes);
app.use((req, res) => res.status(404).send({ message: 'Ресурс не найден' }));
app.use(errorLogger);

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`App listening ${PORT} port`);
});
