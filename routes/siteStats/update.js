'use strict';

var SiteStats = require('./../../models/siteStats');

module.exports = function(payload, cb) {
  // payload is {blips: Number, tweets: Number, sponsoredBlips: Number}
  console.log('update payload', payload);
  SiteStats.update(payload, function(err) {
    if (err) return cb(err);
    return cb(null);
  });
};