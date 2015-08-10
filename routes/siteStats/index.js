'use strict';

var SiteStats = require('./../../models/siteStats');

module.exports = function(req, res) {
  SiteStats.findById(1, function(err, stats) {
    if (!stats) return res.send('no stats');
    if (err) return res.send('could not find stats', err);
    console.log('stats', stats);
    var stats = stats.sanitize();
    return res.send({stats: stats});
  });
};