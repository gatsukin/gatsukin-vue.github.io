const { gulp, fileinclude, dirs } = require('../variables.js')

const buildHtmlWait = () => {
  return gulp.src(dirs.src.htmlArchive)
    .pipe(fileinclude({ indent: true }).on('error', function (err) {
    	console.log('ERROR', err)
    }))
    .pipe(gulp.dest(dirs.dist.html))
}

exports.buildHtmlWait = buildHtmlWait