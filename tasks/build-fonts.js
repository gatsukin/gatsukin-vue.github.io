const fs = require('fs')
const path = require('path')
const {
  gulp,
  rename,
  dirDist,
  dirs,
  dirFonts
} = require('../variables.js')

// const fontsFileLess = `${dirs.srcPathFull.less}fonts.less`

let formatFont = {
  '.eot': `format("embedded-opentype")`,
  '.woff': `format("woff")`,
  '.woff2': `format("woff2")`,
  '.ttf': `format("truetype")`,
  '.svg': `format("svg")`
}

// const appendFont = (files, nameDirFont, length) => {
//   fs.appendFileSync(fontsFileLess, `\n@font-face {`, 'utf-8', (err) => {})

//   files.forEach((file, index) => {
//     if (index === 0) {
//       fs.appendFileSync(
//         fontsFileLess,
//         `\n\tfont-family: "${nameDirFont}";\n\tsrc: `,
//         'utf-8',
//         (err) => {
//           console.log(err)
//         })
//     }

//     const setUrlFont = `\n\t\t\turl("${dirFonts}/${nameDirFont}/${file}")`
//     const setFormatFont = formatFont[path.extname(file)]
//     const setSymAfterUrl = length === (index + 1) ? ';' : ','

//     fs.appendFileSync(
//       fontsFileLess,
//       `${setUrlFont} ${setFormatFont}${setSymAfterUrl}`,
//       'utf-8',
//       (err) => {
//         console.log(err)
//       }
//     )
//   })

//   fs.appendFileSync(fontsFileLess, `\n}\n`, 'utf-8', (err) => {
//     console.log(err)
//   })
// }

const readDirFonts = () => {
  let arFolderFontsPath = fs.readdirSync(dirs.srcPathFull.fonts)
  if (!arFolderFontsPath.length) return

  // fs.writeFileSync(fontsFileLess, '', 'utf-8')

  for (let i = 0; i < arFolderFontsPath.length; i++) {
    let fullFontPath = `${dirs.srcPathFull.fonts}${arFolderFontsPath[i]}/`
    let arFonts = fs.readdirSync(fullFontPath)

    if (!arFonts.length) return console.log('error')

    // appendFont(arFonts, arFolderFontsPath[i], arFonts.length)
  }
}

const buildFonts = (cb) => {
  readDirFonts()

  gulp.src(dirs.src.fonts)
    .pipe(gulp.dest(dirs.dist.fonts))

  return cb()
}

exports.buildFonts = buildFonts
