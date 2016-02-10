'use strict';

var Column = require('../models/column');

var saveColumn = function(column){
  var C = new Column(column);

  C.save(function(err){
    if (err) console.log(err);
    console.log('Saved ');
    console.log(C);
  });
};

module.exports = saveColumn;