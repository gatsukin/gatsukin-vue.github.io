const { gulp, rename, dirs } = require('../variables.js')

const buildImg = () => {
  return gulp.src(dirs.src.img)
  .pipe(gulp.dest(dirs.dist.img))
}

exports.buildImg = buildImg