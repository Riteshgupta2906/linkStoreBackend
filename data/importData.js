const fs = require('fs');
const Entry = require('./../model/entryModel');
const mongoose = require('mongoose');
const dotEnv = require('dotenv');

dotEnv.config({ path: './../config.env' });
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

const data = JSON.parse(fs.readFileSync(`${__dirname}/data.js`, 'utf-8'));

const importData = async () => {
  try {
    await Tour.create(tour);
  } catch (err) {
    console.log(err);
  }
  process.exit();
};
const deleteData = async () => {
  try {
    await Tour.deleteMany();
  } catch (err) {
    console.log(err);
  }
  process.exit();
};
if (process.argv[2] === '--import') {
  importData();
} else if (process.argv[2] === '--delete') {
  deleteData();
}
