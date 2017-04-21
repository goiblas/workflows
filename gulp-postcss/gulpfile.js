const gulp = require('gulp'),
      postcss = require('gulp-postcss'),
      autoprefixer = require('autoprefixer'),
      cssvariables = require('postcss-css-variables'),
      importUrl = require('postcss-import'),
      postcssInlineSvg = require('postcss-inline-svg'),
      cssnano = require('gulp-cssnano');

const plugins = [
    autoprefixer({browsers: ['last 2 version']}),
    importUrl,
    cssvariables,
    postcssInlineSvg
];

gulp.task('css', function() {

 return gulp.src('precss/style.css')
        .pipe(postcss(plugins) )
        .pipe(cssnano())
        .pipe(gulp.dest('css/'));
});


gulp.task('default', ['css']);