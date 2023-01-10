const mongoose = require('mongoose');

const groupSchema = new mongoose.Schema({
  group: {
    type: String,
    required: [true, 'Group Name Required'],
    unique: true,
    trim: 'true',
  },
  slug: {
    type: String,
    required: true,
    unique: true,
  },
});

// entrySchema.pre('save', function (next) {
//   this.group = slugify(this.group, { lower: true });
//   next();
// });
const Group = mongoose.model('Group', groupSchema);
module.exports = Group;
