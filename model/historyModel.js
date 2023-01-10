const mongoose = require('mongoose');
const slugify = require('slugify');
const historySchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Title Required'],
    unique: true,
    trim: 'true',
  },
  link: {
    type: String,
    trim: 'true',
    required: [true, 'link Required'],
  },
  time: {
    type: String,
  },
});

// entrySchema.pre('save', function (next) {
//   this.group = slugify(this.group, { lower: true });
//   next();
// });
const History = mongoose.model('History', historySchema);
module.exports = History;
