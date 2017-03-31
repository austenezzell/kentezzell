const src = 'src'
const build = 'build'

export const paths = {
  src,
  build,
  html: `${src}/html/**/*`,
  templates: `${src}/html/_templates/`,
  scss: `${src}/scss/**/*.scss`,
  styles: `${src}/scss/styles.scss`,
  js: {
    all: `${src}/js/**/*.js`,
    main: `${src}/js/main.js`
  },
  img: `${src}/img/**/*`,
  index: [
    `${src}/html/**/*.html`, `!${src}/html/_templates{,/**}`
  ],
  docs: `${src}/docs/**/*`,
  data: `${src}/html/_data/**/*`
}
