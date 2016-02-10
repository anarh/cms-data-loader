'use strict';

module.exports = function(val){
  if (val[0] === ':') {
    val = val.slice(1);
  }
  return val;
};