const gulp = require("gulp"),
      sass  = require("gulp-sass");
    
gulp.task('sass', () => {
    return gulp.src('scss/**/*.scss')
               .pipe(sass())
               .pipe(gulp.dest('css'));
});

gulp.task('watch:sass', () => {
    gulp.watch('scss/**/*.scss', ['sass']);
});