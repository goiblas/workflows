const gulp = require('gulp'),
      postcss = require('gulp-postcss'),
      autoprefixer = require('autoprefixer'),
      cssimport = require('postcss-import'),
      customproperties = require('postcss-custom-properties'),
      apply = require('postcss-apply'),
      mixins = require('postcss-mixins'),
      nested = require('postcss-nested'),
      customMedia = require("postcss-custom-media"),
      nano = require('gulp-cssnano'),
      postcssInlineSvg = require('postcss-inline-svg');

const plugins = [
    cssimport,
    autoprefixer,
    customproperties,
    apply,
    mixins,
    nested,
    customMedia,
    postcssInlineSvg
];
const configNano = {
    autoprefixer: { browsers: 'last 2 versions' },
    discardComments: { removeAll: true },
    safe: true
};

gulp.task('css', function() {

 return gulp.src('precss/**/*.css')
        .pipe(postcss(plugins) )
        .pipe(nano(configNano))
        .pipe(gulp.dest('css'));
});

gulp.task('watch', function() {
    gulp.watch('precss/**/*.css', ['css']);

});

gulp.task('default', ['css', 'watch',]);