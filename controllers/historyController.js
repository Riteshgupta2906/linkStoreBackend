const History = require('./../model/historyModel');
const catchAsync = require('./catchAsyncError');
const AppError = require('../utils/appError');

exports.createHistory = async (req, res) => {
  try {
    const group = await History.create(req.body);
    res.status(201).json({ message: 'success', group });
  } catch (err) {
    res.status(400).json({ message: 'Failed', err });
  }
};
exports.getAllHistory = async (req, res) => {
  try {
    const data = await History.find();
    res.status(200).json({ message: 'success', data });
  } catch (err) {
    res.status(400).json({ message: 'Failed', err });
  }
};
