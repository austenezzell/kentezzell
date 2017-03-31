import { paths } from './paths'
import gulp from 'gulp'
import uncss from 'gulp-uncss'

module.exports = () => gulp.src(`${paths.build}/css/app.min.css`)
  .pipe(uncss({
    html: [`${paths.build}/**/*.html`]
  }))
  .pipe(gulp.dest(`${paths.build}/css/`))
