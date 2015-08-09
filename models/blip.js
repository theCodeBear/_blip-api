'use strict';

var mongoose = require('mongoose');
var Blip;

var blipSchema = new mongoose.Schema({
  message: { type: String, required: true },
  lat: { type: Number, required: true },
  lon: { type: Number, required: true },
  count: { type: Number, required: true },
  hashtags: [{ type: String }],
  sponsored: { type: Boolean, required: true },
  createdAt: { type: Date, default: Date.now, expires: 60 }
});

blipSchema.statics.create = function(payload, cb) {
  console.log(payload);
  var blip = new Blip(payload);
  blip.save(cb(null, blip));
};


var Blip = mongoose.model('Blip', blipSchema);
module.exports = Blip;
