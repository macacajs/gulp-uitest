'use strict';

var uitest = require('uitest');
var through = require('through2');

module.exports = function(options) {
  return through.obj(function(file, env, cb) {
    uitest(Object.assign({
      url: 'file://' + file.path
    }, options))
    .then(cb, cb);
  });
};
