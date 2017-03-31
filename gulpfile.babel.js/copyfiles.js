import { paths } from './paths'
import gulp from 'gulp'

module.exports = () => gulp.src(
  [
    `${paths.src}/**/*.{ttf,woff,woff2,eof,svg,ico,png,jpg,gif,pdf}`,
    `${paths.src}/**/.htaccess`,
  ])
  .pipe(gulp.dest(paths.build))
