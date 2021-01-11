const {
  src,
  dest,
  parallel,
  series,
  watch
} = require('gulp')

const {
  clearDir
} = require('./tasks/clear.js')
const {
  buildLess
} = require('./tasks/build-less.js')
const {
  buildHtml
} = require('./tasks/build-html.js')
const {
  buildJs
} = require('./tasks/build-js.js')
const {
  buildFonts
} = require('./tasks/build-fonts.js')
const {
  buildImg
} = require('./tasks/build-img.js')

const {
  dirDist,
  dirs,
  browserSync
} = require('./variables.js')

const stakeOut = () => {
  watch(dirs.watch.index, buildHtml).on('change', browserSync.reload)
  watch(dirs.watch.html, buildHtml).on('change', browserSync.reload)
  watch(dirs.watch.template, buildHtml).on('change', browserSync.reload)
  watch(dirs.watch.less, buildLess).on('change', browserSync.reload)
  watch(dirs.watch.img, buildImg).on('change', browserSync.reload)
  watch(dirs.watch.js, buildJs).on('change', browserSync.reload)
}

const serve = () => {
  // browserSync.init({
  //   server: {
  //     baseDir: dirDist
  //   }
  // })

  stakeOut()
}

const buildAssets = series(
  clearDir,
  parallel(
    buildFonts,
    buildImg,
    buildLess,
    buildJs
  )
)
const buildAssetsProd = series(
  clearDir,
  parallel(
    buildFonts,
    buildImg,
    buildLess,
    buildJs
  )
)

const build = series(buildAssets, buildHtml)
const buildWait = series(buildAssets)
const buildProd = series(buildAssetsProd, buildHtml)

exports.clear = clearDir
exports.fonts = buildFonts
exports.js = buildJs
exports.approved = build
exports.build = build
exports.buildProd = buildProd
exports.serve = series(build, serve)
exports.default = series(buildWait, stakeOut)