const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const NoteSchema = new mongoose.Schema({
  work_yesterday: {
    type: String,
  },
  work_today: {
    type: String,
  },
  user_id: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },
  project_id: {
    type: Schema.Types.ObjectId,
    ref: "Project"
  },
  createdAt: {
    type: Date,
    default: Date.now,
  }
});

module.exports = mongoose.model('Note', NoteSchema);