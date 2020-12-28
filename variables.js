const gulp = require('gulp')
const browserSync = require('browser-sync').create() // Локальный сервер
const babel = require('gulp-babel')
const del = require('del')
const less = require('gulp-less') // Препроцессор Less
const concat = require('gulp-concat') // Соединение в один файл
const postcss = require('gulp-postcss')
const argv = require('yargs').argv
const gulpIf = require('gulp-if')
const autoprefixer = require('autoprefixer') // Для прописывания префиксов
// const precss       = require('precss')
const rename = require('gulp-rename')
const cssnano = require('cssnano') // Для отимизации и минификации выходных стилей
const fileinclude = require("gulp-file-include")
const minify = require('gulp-minify')
const sourcemaps = require('gulp-sourcemaps')

const dirSrc = './src'
const dirDist = './dist'
const dirLess = '/less'
const dirCss = '/css'
const dirFonts = '/fonts'
const dirAssets = '/assets'
const dirImg = '/img'
const dirJs = `/js`
const dirSwiper = `/js/swiper`
const dirLib = `/lib`
const dirPages = `/pages`
const dirViews = `/views`
const dirTemplates = `/template`
const dirIncludes = `/includes`

const dirs = {
  dist: {
    index: `${dirDist}`,
    html: `${dirDist}`,
    css: `${dirDist}${dirAssets}${dirCss}`,
    js: `${dirDist}${dirAssets}${dirJs}`,
    jsSwiper: `${dirDist}${dirAssets}${dirSwiper}`,
    jslib: `${dirDist}${dirAssets}${dirJs}${dirLib}`,
    img: `${dirDist}${dirAssets}${dirImg}`,
    fonts: `${dirDist}${dirAssets}${dirFonts}`
  },
  srcPathFull: {
    fonts: `${dirSrc}${dirAssets}${dirFonts}/`,
    less: `${dirSrc}${dirAssets}${dirLess}/`,
    img: `${dirSrc}${dirAssets}${dirImg}/`
  },
  src: {
    index: `${dirSrc}/*.html`,
    html: [
      `${dirSrc}/**/*.html`,
      `!${dirSrc}/**/_*.html`
    ],
    less: `${dirSrc}${dirAssets}${dirLess}/style.less`,
    fonts: `${dirSrc}${dirAssets}${dirFonts}/**`,
    img: `${dirSrc}${dirAssets}${dirImg}/**`,
    js: [
      `${dirSrc}${dirAssets}${dirJs}/*.js`,
    ],
    jsSwiper: `${dirSrc}${dirAssets}${dirSwiper}/*.js`,
    vendorStyle: `${dirSrc}${dirAssets}${dirCss}/**/*.js`,
    vendorJs: [
      `${dirSrc}${dirAssets}${dirJs}${dirLib}/**/*.js`
    ]
  },
  watch: {
    index: `${dirSrc}/*.html`,
    html: `${dirSrc}/**/*.html`,
    template: `${dirSrc}${dirTemplates}/**/*.html`,
    less: `${dirSrc}${dirAssets}${dirLess}/**/*.less`,
    cssVendor: `${dirSrc}${dirAssets}${dirCss}/**/*.css`,
    img: `${dirSrc}${dirAssets}${dirImg}/**`,
    js: `${dirSrc}${dirAssets}${dirJs}/**/*.js`,
    jslib: `${dirSrc}${dirAssets}${dirJs}${dirLib}/**/*.js`,
    jsSwiper: `${dirSrc}${dirAssets}${dirSwiper}/*.js`,
  }
}

module.exports = {
  // Variables path
  dirSrc,
  dirDist,
  dirLess,
  dirCss,
  dirFonts,
  dirImg,
  dirAssets,
  dirJs,
  dirViews,
  dirSwiper,
  dirTemplates,
  dirPages,
  dirIncludes,
  dirs,
  // Plugins
  gulp,
  del,
  browserSync,
  autoprefixer,
  postcss,
  babel,
  gulpIf,
  minify,
  argv,
  less,
  concat,
  // pug,
  fileinclude,
  rename,
  cssnano,
  sourcemaps,
}