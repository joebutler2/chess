// webpack.config.js
module.exports = {
  entry: {
    app: [
      './index.js'
    ]
  },

  output: {
    filename: 'include-me.js',
  },

  module: {
    rules: [
      {
        test:    /\.elm$/,
        exclude: [/elm-stuff/, /node_modules/],
        loader:  'elm-webpack-loader?verbose=true&warn=true',
      },
    ],

    noParse: /\.elm$/,
  },

  devServer: {
    inline: true,
    stats: { colors: true },
  }
};

