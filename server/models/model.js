const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const taskSchema = new Schema({
  task: { type: String, require: true },
  time: { type: Date, default: Date.now },
});

module.exports = mongoose.model('todo', taskSchema);
