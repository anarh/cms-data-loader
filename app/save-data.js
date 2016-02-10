'use strict';

var Data = require('../models/data');

var saveData = function(d){
  var D = new Data(d);

  D.save(function(err){
    if (err) console.log(err);
    console.log(D);
    console.log('Saved ');
  });
};

module.exports = saveData;