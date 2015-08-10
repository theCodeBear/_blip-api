'use strict';

var Blip = require('./../../models/blip');

module.exports = function(req, res) {
  Blip.find().then(function(blips) {
    res.send(blips);
  });
};
