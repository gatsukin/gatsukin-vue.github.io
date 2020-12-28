const {
  gulp,
  browserSync,
  autoprefixer,
  postcss,
  concat,
  less,
  sourcemaps,
  rename,
  dirs,
  cssnano,
  gulpIf,
  argv
} = require('../variables.js')

const buildLess = () => {
  return gulp.src(dirs.src.less)
    .pipe(gulpIf(argv.dev, sourcemaps.init({
      loadMaps: true
    })))
    .pipe(less())
    .pipe(concat('style.css'))
    .pipe(gulpIf(argv.prod, postcss([
      autoprefixer(),
      cssnano()
    ])))
    .pipe(gulpIf(argv.prod, rename('style.css')))
    // .pipe(gulpIf(argv.dev, sourcemaps.write()))
    .pipe(gulp.dest(dirs.dist.css))
    .pipe(browserSync.reload({
      stream: true
    }))
}

exports.buildLess = buildLess
