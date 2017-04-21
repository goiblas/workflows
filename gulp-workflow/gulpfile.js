const gulp = require("gulp"),
      // plugins css
      sass  = require("gulp-sass"),
      webserver = require('gulp-webserver'),
      autoprefixer = require('gulp-autoprefixer'),
      cssnano = require('gulp-cssnano'),

      // debugger
      sourcemaps = require('gulp-sourcemaps'),

      // plugins js
      babel = require('gulp-babel'),
      concat = require('gulp-concat'),
      uglify = require('gulp-uglify');
    
gulp.task('sass', () => {
    return gulp.src('scss/**/*.scss')
        // sourcemaps facilita el debugger
        .pipe(sourcemaps.init())
        // transformo el código a css
        .pipe(sass())
        // añado prefijos para los navegadores 
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        // minifico la css
        .pipe(cssnano())
        .pipe(gulp.dest('css'));
});

gulp.task('js', () => {
  return gulp.src( 'es6/**/*.js')
        // transformo a es2015
        .pipe(babel({
            presets: ['es2015']
        }))
        // junto los archivos
        .pipe(concat('scripts.js'))
        // ofusco y comprimo el js
        .pipe(uglify())
        .pipe(gulp.dest('js'));
});

gulp.task('webserver', () => {
    return gulp.src('./')
        .pipe(webserver({
        livereload: true,
        open: true
        }));
});

gulp.task('watch:sass', () => {
    return gulp.watch('scss/**/*.scss', ['sass']);
});
gulp.task('watch:js', () => {
    return gulp.watch('es6/**/*.js', ['js']);
});
gulp.task('wacth:html', () => {
    return gulp.src( './*.+(html|htm)');
});

gulp.task('default', ['watch:sass', 'wacth:html', 'watch:js', 'webserver']);