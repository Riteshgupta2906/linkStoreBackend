const Group = require('./../model/groupModel');
const catchAsync = require('./catchAsyncError');
const AppError = require('../utils/appError');

exports.createGroup = async (req, res) => {
  try {
    const group = await Group.create(req.body);
    res.status(201).json({ message: 'success', group });
  } catch (err) {
    res.status(400).json({ message: 'Failed', err });
  }
};
exports.getAllGroup = async (req, res) => {
  try {
    const data = await Group.find();
    res.status(200).json({ message: 'success', data });
  } catch (err) {
    res.status(400).json({ message: 'Failed', err });
  }
};
