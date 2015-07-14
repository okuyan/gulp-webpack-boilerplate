// @file config.js
var path = require('path');

var dest = './build'; 
var src = './src'; 
var relativeSrcPath = path.relative('.', src);

module.exports = {
  dest: dest,

  js: {
    src: src + '/js/**',
    dest: dest + '/js',
    uglify: false
  },

  webpack: {
    entry: src + '/js/app.js',
    output: {
      filename: 'bundle.js'
    },
    resolve: {
      extensions: ['', '.js']
    }
  },
  
  copy: {
    src: [
      src + '/www/index.html'
    ],
    dest: dest
  },

  less: {
    src: [  // もし外部のcssフレームワーク使うなら配列の先頭で読み込むと良い
      src + '/less/style.less'  // ファイル名の先頭がアンスコはビルド対象外にする
    ],
    dest: dest + '/css/',
    output: 'style.css',  // 出力ファイル名
    autoprefixer: {
      browsers: ['last 2 versions']
    },
    minify: false
  },
  
  watch: {
    js: relativeSrcPath + '/js/**',
    less: relativeSrcPath + '/less/**',
    www: relativeSrcPath + '/www/index.html'
  }  
}