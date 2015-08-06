'use strict';

module.exports = function(app) {
  app.get('/blip', require('./../routes/blip/index'));
};
