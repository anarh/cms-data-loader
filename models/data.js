'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var DataSchema = new Schema({
  sid : Number,
  id : String,
  position : Number,
  created_at : Number,
  created_meta : String,
  updated_at : Number,
  updated_meta : String,
  meta : String,
  drg_definition : String,
  provider_id : Number,
  provider_name : String,
  provider_street_address : String,
  provider_city : String,
  provider_state : String,
  provider_zip_code : Number,
  hospital_referral_region_description : String,
  total_discharges : Number,
  average_covered_charges : String,
  average_medicare_payments : String,
  average_medicare_payments_2 : String
});

module.exports = mongoose.model('Data', DataSchema);