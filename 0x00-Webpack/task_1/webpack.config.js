const path = require('path');

module.exports = {
  mode: 'production', // Set mode to production
  entry: './js/dashboard_main.js', // Entry file
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/, // Match JavaScript files
        exclude: /node_modules/, // Exclude node_modules
        use: {
          loader: 'babel-loader', // Use Babel for ES6+ compatibility
        },
      },
    ],
  },
};
