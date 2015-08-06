'use strict';

var Blip = require('../../models/blip');


module.exports = function(req, res) {
  console.log(req.body);
  Blip.create(req.body, function(err, blip) {
    if (err || !blip) return res.status(500);
    return res.send({blip: blip});
  });
};