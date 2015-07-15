// @file config.js
var webpack = require('webpack');
var path = require('path');

var dest = './build'; 
var src = './src'; 
var relativeSrcPath = path.relative('.', src);
var current = process.cwd();

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
        root: [
            path.join(current, 'bower_components')
        ]
    },
    plugins: [
      new webpack.ResolverPlugin(
        new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin('.bower.json', ['main'])
      ),
      new webpack.optimize.DedupePlugin(),
      new webpack.optimize.UglifyJsPlugin(),
      new webpack.optimize.OccurenceOrderPlugin(),
      new webpack.optimize.AggressiveMergingPlugin(),
      new webpack.ProvidePlugin({
        jQuery: "jquery",
        $: "jquery"
      })
    ]
  },
  
  copy: {
    src: [
      src + '/www/index.html'
    ],
    dest: dest
  },

  less: {
    src: [  // load third party less if needed
      src + '/less/style.less'
    ],
    dest: dest + '/css/',
    output: 'style.css',
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