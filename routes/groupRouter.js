const express = require('express');
const router = express.Router();
const {
  createGroup,
  getAllGroup,
} = require('./../controllers/groupController');

router.route('/').get(getAllGroup).post(createGroup);

module.exports = router;
