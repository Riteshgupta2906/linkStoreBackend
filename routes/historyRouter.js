const express = require('express');
const router = express.Router();
const {
  createHistory,
  getAllHistory,
} = require('./../controllers/historyController');

router.route('/').get(getAllHistory).post(createHistory);

module.exports = router;
