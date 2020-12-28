const { dirDist, del } = require('../variables.js')

const clearDir = () => {
  return del(dirDist)
}

exports.clearDir = clearDir