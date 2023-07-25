const express = require('express');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const helmet = require('helmet');
const { errors } = require('celebrate');
const { requestLogger, errorLogger } = require('./middlewares/logger');
const errorHandler = require('./middlewares/error-handler');
const mainRouter = require('./routes/index');
const { SERVER_PORT, DB } = require('./config');

const app = express();

mongoose.connect(DB);

app.use(helmet());
app.use(cookieParser());
app.use(express.json());
app.use(requestLogger);

app.get('/crash-test', () => {
  setTimeout(() => {
    throw new Error('Сервер сейчас упадёт');
  }, 0);
});
app.use('/', mainRouter);

app.use(errorLogger);
app.use(errors());
app.use(errorHandler);

app.listen(SERVER_PORT);
