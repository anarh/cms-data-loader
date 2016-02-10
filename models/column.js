'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ColumnSchema = new Schema({
  id: Number,
  name: String,
  dataTypeName: String,
  description: String,
  fieldName: String,
  position: Number,
  renderTypeName: String,
  tableColumnId: Number,
  width: Number,
  cachedContents: Schema.Types.Mixed,
  format: Schema.Types.Mixed
});

module.exports = mongoose.model('Column', ColumnSchema);