var path = require('path');
// vue.config.js
module.exports = {
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    writeToDisk: true,
    hot: false
  }
}