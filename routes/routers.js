const express = require('express');
const router = express.Router();
const {
  createEntry,
  getAllEntry,
  getOneEntry,
  deleteEntry,
  updateEntry,
} = require('../controllers/entryController');
router
  .route('/')
  .get(getAllEntry)
  .post(createEntry)
  .delete(deleteEntry)
  .patch(updateEntry);

module.exports = router;
