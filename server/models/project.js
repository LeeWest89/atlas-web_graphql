const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const projectSchema = new Schema({
  title: { type: String },
  weight: { type: Number },
  description: {type: String},
  tasks: [{ type: Schema.Types.ObjectId, ref: 'Task' }]
});
module.exports = mongoose.model('Project', projectSchema);
