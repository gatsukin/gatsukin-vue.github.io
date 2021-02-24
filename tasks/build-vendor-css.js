const {
  gulp,
  concat,
  dirs
} = require('../variables.js')

const buildVendorCss = () => {
  return gulp.src(dirs.src.vendorStyle)
    // .pipe(concat('vendors.min.css'))
    .pipe(gulp.dest(dirs.dist.css))
}

exports.buildVendorCss = buildVendorCss