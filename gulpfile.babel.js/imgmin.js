import { paths } from './paths'
import gulp from 'gulp'
import svgmin from 'gulp-imagemin'

module.exports = () => gulp.src(`${paths.img}.{jpg,png,gif,svg}`)
  .pipe(svgmin())
  .pipe(
    gulp.dest(`${paths.src}/img`, {
      overwrite: true
    })
  )
