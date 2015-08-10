'use strict';

var mongoose = require('mongoose');
var SiteStats;

var siteStatsSchema = new mongoose.Schema({
  _id: { type: Number, default: 1, required: true },
  blipCount: { type: Number, default: 0, required: true },
  tweetCount: { type: Number, default: 0, required: true },
  sponsoredBlipCount: { type: Number, default: 0, required: true },
  createdAt: { type: Date, default: Date.now, required: true }
}, { collection: 'siteStats'});

siteStatsSchema.statics.update = function(payload, cb) {
  SiteStats.findById(1, function(err, stats) {
    if (err) return cb(err);
    console.log(stats);
    if (payload.blips) stats.blipCount += payload.blips;
    if (payload.tweets) stats.tweetCount += payload.tweets;
    if (payload.sponsoredBlips) stats.sponsoredBlipCount += payload.sponsoredBlips;
    console.log('stats after change', JSON.stringify(stats));
    stats.save(cb(null));
  });
};

siteStatsSchema.methods.sanitize = function() {
  var statsObject = this.toObject();
  delete statsObject._id;
  delete statsObject.createdAt;
  return statsObject;
};



SiteStats = mongoose.model('SiteStats', siteStatsSchema);
module.exports = SiteStats;