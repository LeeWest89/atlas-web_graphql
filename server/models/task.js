const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const taskSchema = new Schema({
  title: { type: String },
  weight: { type: Number },
  description: {type: String},
  project: { type: Schema.Types.ObjectId, ref: 'Project' }
});
module.exports = mongoose.model('Task', taskSchema);
