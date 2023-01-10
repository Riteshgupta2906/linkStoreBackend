const express = require('express');
const app = express();
const mongoose = require('mongoose');

const dotEnv = require('dotenv');
dotEnv.config({ path: './config.env' });

const entryRouter = require('./routes/routers');
const groupRouter = require('./routes/groupRouter');
const historyRouter = require('./routes/historyRouter');
app.use(express.json());
const cors = require('cors');
app.use(cors());
app.options('*', cors());
app.use('/api/v1/entries', entryRouter);
app.use('/api/v1/groups', groupRouter);
app.use('/api/v1/history', historyRouter);

const db = process.env.DATABASE_STRING.replace(
  '<password>',
  process.env.DATABASE_PASSWORD
);
mongoose
  .connect(db, {
    useNewUrlParser: true,
    useCreateIndex: false,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then((con) => {
    console.log('DB Connection Successful');
  });
app.listen(process.env.PORT, () => {
  console.log('server is up');
});
