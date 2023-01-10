const mongoose = require('mongoose');
const slugify = require('slugify');
const entrySchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Title Required'],
    unique: true,
    trim: 'true',
  },
  slug: String,
  description: {
    type: String,
    trim: 'true',
  },
  link: {
    type: String,
    trim: 'true',
    required: [true, 'link Required'],
  },
  group: {
    type: String,
    trim: 'true',
    required: [true, 'Group Required'],
  },
});

// entrySchema.pre('save', function (next) {
//   this.group = slugify(this.group, { lower: true });
//   next();
// });
const Entry = mongoose.model('Entry', entrySchema);
module.exports = Entry;
