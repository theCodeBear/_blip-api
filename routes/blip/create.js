'use strict';

var Blip = require('../../models/blip');


module.exports = function(req, res) {
  console.log('blip body', req.body);
  Blip.create(req.body, function(err, blip) {
    if (err || !blip) {
      return console.log('ERROR OR NO BLIP SAVED');
    }
    return console.log('BLIP SAVED');
  });
};