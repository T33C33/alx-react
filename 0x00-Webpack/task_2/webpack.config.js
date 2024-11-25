const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: './js/dashboard_main.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js',
  },
  //Plugins
  // plugins: [
  //   new HtmlWebpackPlugin({
  //     title: 'My Webpack Project',
  //     filename: 'index.html',
  //     template: './public/index.html',
  //   }),
  // ],
  //Loader
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        use: ['file-loader'],
      },
      {
        loader: 'image-webpack-loader', // Optimizes images
        options: {
          mozjpeg: {
            progressive: true,
            quality: 75, // JPEG quality
          },
          optipng: {
            enabled: true, // Enable PNG optimization
          },
          pngquant: {
            quality: [0.65, 0.9], // PNG quality range
            speed: 4,
          },
          gifsicle: {
            interlaced: false, // GIF optimization
          },
          svgo: {
            plugins: [
              {
                removeViewBox: false, // Preserve SVG viewBox
              },
            ],
          },
        },
      },
    ],
  },
  //Loader
  // optimization: {
  //   minimizer: [
  //     `...`, // Extend default minimizers (e.g., Terser for JS)
  //     new ImageMinimizerPlugin({
  //       minimizer: {
  //         implementation: ImageMinimizerPlugin.imageminMinify, // Use imagemin
  //         options: {
  //           plugins: [
  //             ['imagemin-mozjpeg', { quality: 75 }], // Compress JPEG images
  //             ['imagemin-pngquant', { quality: [0.6, 0.8] }], // Compress PNG images
  //           ],
  //         },
  //       },
  //     }),
  //   ],
  // },
};
