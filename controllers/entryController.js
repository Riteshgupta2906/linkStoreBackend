const Entry = require('../model/entryModel');
const catchAsync = require('./catchAsyncError');
const AppError = require('../utils/appError');

exports.createEntry = async (req, res) => {
  try {
    const entry = await Entry.create(req.body);
    res.status(201).json({ message: 'success', entry });
  } catch (err) {
    res.status(400).json({ message: 'Failed', err });
  }
};
exports.getAllEntry = async (req, res) => {
  try {
    const data = await Entry.find();
    res.status(200).json({ message: 'success', data });
  } catch (err) {
    res.status(400).json({ message: 'Failed', err });
  }
};

exports.updateEntry = async (req, res) => {
  const { array, grp } = req.body;

  try {
    const entry = await Entry.updateMany({ _id: { $in: array } }, grp);
    res.status(200).json({ status: 200, data: { entry } });
  } catch (err) {
    res.status(400).json({ status: 'Failed', message: err });
  }
};
exports.deleteEntry = async (req, res, next) => {
  console.log(req.body);
  try {
    const entry = await Entry.deleteMany({ _id: req.body });
    if (!entry) return next(new AppError('No Entry Found with this Id', 404));
    res.status(200).json({ status: 'success', data: null });
  } catch (err) {
    res.status(400).json({ status: 'Failed', message: err.message });
  }
};
