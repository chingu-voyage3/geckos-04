/*-------------------Import node modules & packages----------------------*/
var gulp = require('gulp');
var nested = require('postcss-nested')
var cssImport = require('postcss-import');
var cssvars = require('postcss-simple-vars');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var mixins = require('postcss-mixins');
/*------------------------------------------------------------------------*/

gulp.task('styles', function(){
  /*transform the source style.css blueprint to usable and complete styles.css in temp.
  Postcss method takes in an array of required node modules*/
  return gulp.src('./app/assets/styles/styles.css')
  .pipe(postcss([cssImport, mixins, cssvars, nested, autoprefixer]))
  .on('error', function(errorInfo){
    console.log(errorInfo.toString());
    this.emit('end');
  })
  .pipe(gulp.dest('./app/temp/styles'));
});
