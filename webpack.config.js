module.exports = {
  entry: "./app/components/app.jsx",
  output: {
    filename: "public/bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: ['es2016', 'react'],
            }
        }
      }
    ]
  }
};