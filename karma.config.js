var path = require('path');

module.exports = function (config) {
  config.set({
    browsers: [
      'Chrome',
      'PhantomJS'
    ],
    
    phantomjsLauncher: {
      // Have phantomjs exit if a ResourceError is encountered (useful if karma exits without killing phantom) 
      exitOnResourceError: true
    },

    coverageReporter: {
      reporters: [
        { type: 'html', subdir: 'html' },
        { type: 'lcovonly', subdir: '.' },
      ],
    },
    files: [
      'tests.webpack.js',
    ],
    frameworks: [
      'jasmine',
    ],
    preprocessors: {
      'tests.webpack.js': ['webpack', 'sourcemap'],
    },
    reporters: ['progress', 'coverage'],
    webpack: {
      cache: true,
      devtool: 'inline-source-map',
      module: {
        preLoaders: [
          {
            test: /spec\.js$/i,
            include: /src/,
            exclude: /node_modules/,
            loader: 'babel',
            query: {
              cacheDirectory: true,
            },
          },
          {
            test: /^(?!.*spec\.js$).*\.js$/i,
            include: /src/,
            exclude: /node_modules/,
            loader: 'babel-istanbul',
            query: {
              cacheDirectory: true,
            },
          },
        ],
        loaders: [
          {
            test: /^(?!.*spec\.js$).*\.js$/i,
            include: path.resolve(__dirname, '../src'),
            exclude: /node_modules  /,
            loader: 'babel',
            query: {
              cacheDirectory: true,
            },
          },
        ],
      },
    },
  });
};
