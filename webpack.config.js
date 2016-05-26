module.exports = {
  entry: getEntrySources({
      index: ["./src/js/index.js"],
      style: ["./src/css/style.js"]
  }),
  output: {
    publicPath: 'http://localhost:8080/',
    filename: "[name].js"
  },
  devtool: 'eval',
  module: {
    preLoaders: [],
    loaders: [{
      test: /\.scss$|\.css$/,
      include: /src/,
      loaders: [
        'style',
        'css',
        'autoprefixer?browsers=last 3 versions',
        'sass?outputStyle=expanded'
      ]
    }]
  }
};

function getEntrySources(sources) {
  if (process.env.NODE_ENV !== 'production') {
    for (var key in sources) {
      if (sources.hasOwnProperty(key)) {
        sources[key].push('webpack-dev-server/client?http://localhost:8080');
        sources[key].push('webpack/hot/only-dev-server');
      }
    }
  }

  return sources;
}
