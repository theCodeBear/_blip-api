'use strict';

var mongoose = require('mongoose');
var Blip;

var blipSchema = new mongoose.Schema({
  lat: { type: Number, required: true },
  lon: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now, expires: 60 }
});


var Blip = mongoose.model('Blip', blipSchema);
module.exports = Blip;
