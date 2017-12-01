var gulp = require('gulp');
var watch = require('gulp-watch');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var cssvars = require('postcss-simple-vars');
var nested = require('postcss-nested')
var cssImport = require('postcss-import');

gulp.task('default', function() {
  console.log("new gulp task");
});

gulp.task('html', function(){
  console.log("insert new html");
});

gulp.task('styles', function(){
  /*takes source style.css blueprint and automatically output
  the complete styles.css in temp*/
  return gulp.src('./app/assets/styles/styles.css')
  .pipe(postcss([cssImport, cssvars, nested, autoprefixer]))
  .pipe(gulp.dest('./app/temp/styles'));
});

gulp.task('watch', function() {
  watch('./app/index.html', function() {
    gulp.start('html');
  });
  watch('./app/assets/styles/**/*.css', function() {
    gulp.start('styles');
  });
});
