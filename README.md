# gulp-uitest

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][coveralls-image]][coveralls-url]
[![node version][node-image]][node-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/gulp-uitest.svg?style=flat-square
[npm-url]: https://npmjs.org/package/gulp-uitest
[travis-image]: https://img.shields.io/travis/macacajs/gulp-uitest.svg?style=flat-square
[travis-url]: https://travis-ci.org/macacajs/gulp-uitest
[coveralls-image]: https://img.shields.io/coveralls/macacajs/gulp-uitest.svg?style=flat-square
[coveralls-url]: https://coveralls.io/r/macacajs/gulp-uitest?branch=master
[node-image]: https://img.shields.io/badge/node.js-%3E=_7-green.svg?style=flat-square
[node-url]: http://nodejs.org/download/
[download-image]: https://img.shields.io/npm/dm/gulp-uitest.svg?style=flat-square
[download-url]: https://npmjs.org/package/gulp-uitest

> gulp uitest

## Installment

```bash
$ npm i gulp-uitest --save-dev
```

## Usage

```javascript
var uitest = require('gulp-uitest');

gulp.task('test', [], function() {
  return gulp
    .src('path/to/index.html')
    .pipe(uitest({
      width: 600,
      height: 480,
      hidpi: false,
      useContentSize: true,
      show: false
    }));
});
```

[macacajs/uitest](//github.com/macacajs/uitest)

## License

The MIT License (MIT)
