const { src, dest, series, watch } = require('gulp')
const gulp = require('gulp')
const sync = require('browser-sync').create();
const del = require('del')
const sass = require('gulp-sass')(require('sass'))
const csso = require('gulp-csso')
const autoprefixer = require('gulp-autoprefixer');
const imagemin = require('gulp-imagemin');
var concat = require('gulp-concat');
const minify = require('gulp-minify');

const clear = () => del('dist')

const html = () => src('src/**.html')
  .pipe(dest('dist'))
const imgs = () => src('src/img/**')
  .pipe(imagemin())
  .pipe(dest('dist/img/'))
const scss = () => src('src/scss/style.scss')
  .pipe(sass({ includePaths: ['node_modules'] }))
  .pipe(autoprefixer({
    // browsers: ['last 4 versions'] TODO: Fix
}))
  .pipe(csso())
  .pipe(dest('dist'))
const scripts = () => src(['node_modules/tiny-slider/dist/min/tiny-slider.js', 'src/js/script.js'])
  .pipe(concat('script.js'))
  .pipe(minify())
  .pipe(dest('dist'));
const serve = () => {
  sync.init({
    server: './dist'
  })

  watch('src/**.html', series(html)).on('change', sync.reload)
  watch('src/scss/**scss', series(scss)).on('change', sync.reload)
  watch('src/js/**.js', series(scripts)).on('change', sync.reload)
  watch('src/img/*.*', series(imgs)).on('change', sync.reload)
}


const build = gulp.series(clear, html, scripts, imgs, scss);

exports.default = gulp.series(clear, scss, html, scripts, imgs, serve)
exports.build = build
exports.clear = clear
