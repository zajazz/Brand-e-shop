// const path = require('path');

module.exports = {
  // publicPath: '/',
  // outputDir: process.env.NODE_ENV === 'development' ? './dev/public/' : './dist/public/',
  pages: {
    index: {
      entry: 'src/main.js',
      template: 'public/index.html',
      filename: 'index.html',
      title: 'The BRAND of Luxerious Fasion',
      // chunks to include on this page, by default includes
      // extracted common chunks and vendor chunks.
      chunks: ['chunk-vendors', 'chunk-common', 'index'],
    },
  },
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'sass',
      patterns: [
        './src/sass/_vars.sass',
        './src/sass/_mixins.sass',
      ],
    },
  },
  devServer: {
    proxy: {
      '^/api': {
        target: 'http://localhost:3001',
        ws: true,
        changeOrigin: true,
      },
    },
  },
};
