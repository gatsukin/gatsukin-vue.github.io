const {
  gulp,
  concat,
  browserSync,
  minify,
  dirs,
  gulpIf,
  babel,
  argv
} = require('../variables.js')

const buildSwiper = () => {
  return gulp.src(dirs.src.jsSwiper)
    .pipe(concat('swiper.min.js'))
    .pipe(gulpIf(argv.prod, babel({
      presets: ['@babel/preset-env']
    })))
    .pipe(gulpIf(argv.prod, minify({
      ext: {
        src: '.js',
        min: '.js'
      },
      noSource: true,
      mangle: false
    })))
    .pipe(gulp.dest(dirs.dist.jsSwiper))
    .pipe(browserSync.reload({
      stream: true
    }))
}

exports.buildSwiper = buildSwiper
