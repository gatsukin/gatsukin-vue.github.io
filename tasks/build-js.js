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

const buildJs = () => {
  return gulp.src(dirs.src.js)
    .pipe(concat('script.min.js'))
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
    .pipe(gulp.dest(dirs.dist.js))
    .pipe(browserSync.reload({stream: true}))
}

exports.buildJs = buildJs
