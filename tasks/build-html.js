const { gulp, browserSync, fileinclude, dirs } = require('../variables.js')

const buildHtml = () => {
  return gulp.src(dirs.src.html)
    .pipe(fileinclude({ indent: true }))
    .pipe(gulp.dest(dirs.dist.html))
    .pipe(browserSync.reload({stream: true}))
}

exports.buildHtml = gulp.series(buildHtml)