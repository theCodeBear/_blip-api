'use strict';

module.exports = function(app) {
  app.get('/blip', require('./../routes/blip/index'));
  app.post('/blip', require('./../routes/blip/create'));
};
