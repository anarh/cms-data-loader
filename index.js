'use strict';

var fs = require('fs'),
    async = require('async'),
    mongoose = require('mongoose');

// Data
var cmsRawData = JSON.parse(fs.readFileSync('cmsData.json', 'utf8')),
    cmsColumns = cmsRawData.meta.view.columns,
    cmsData = cmsRawData.data;

var cfg = require('./lib/load-config')(),
    removeFirstColon = require('./lib/remove-first-colon'),
    saveColumn = require('./app/save-column'),
    saveData = require('./app/save-data');

var populateRow = function(d, k, cb){
  var data = {};

  async.forEachOfSeries(d, function(item, key, callback){
    var column = removeFirstColon(cmsColumns[key].fieldName);
    data[column] = item;
    callback();
  }, function(){
    saveData(data);
    cb();
  });
};

// Connect to mongo
mongoose.connect('mongodb://' + cfg.mongo_url + ':' + cfg.mongo_port + '/' + cfg.mongo_db);

// Populate columns
async.forEachOfSeries(cmsColumns, function(c){
  saveColumn(c);
}, function(){
  console.log('done saving columns');
});

// Populate rows
async.forEachOfSeries(cmsData, function(d, k, cb){
  populateRow(d, k, cb);
}, function(){
  console.log('done saving rows');
});



