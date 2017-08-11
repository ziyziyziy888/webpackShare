const path = require('path');

module.exports = {
  entry: {
    index: './src/index.js',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist/js')
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(png|svg|gif|jpg)$/,
        use: [
          'file-loader?outputPath=../img/&name=[name].[ext]'
        ]
      }
    ]
  }
}