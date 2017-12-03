/*-------------------Import node modules & packages----------------------*/
var gulp = require('gulp');
var watch = require('gulp-watch');
var browserSync = require('browser-sync').create();
/*------------------------------------------------------------------------*/

/*initiate browserSync object. BaseDir is set to the location of index.html file*/
gulp.task('watch', function() {
  browserSync.init({
    server: {
      baseDir: "app"
    }
  });

/*whenever any change is saved in index.html, trigger a browserSync.reload()*/
  watch('./app/index.html', function() {
    browserSync.reload();
  });

/*if any change is made to any css file in the subdirectories of styles folder.
trigger the cssInject task*/
  watch('./app/assets/styles/**/*.css', function() {
    gulp.start('cssInject');
  });
});

/*cssInject task requires 'STYLES' task as a dependency inside an array
browserSync.stream() method automatically refreshes the browser with any changes
made to styles.css*/
gulp.task('cssInject', ['styles'],function() {
  return gulp.src('./app/temp/styles/styles.css')
    .pipe(browserSync.stream());
})
