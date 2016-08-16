/* ================================================================
 * gulp-uitest by xdf(xudafeng[at]126.com)
 *
 * first created at : Tue Aug 16 2016 15:25:38 GMT+0800 (CST)
 *
 * ================================================================
 * Copyright  xdf
 *
 * Licensed under the MIT License
 * You may not use this file except in compliance with the License.
 *
 * ================================================================ */

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
