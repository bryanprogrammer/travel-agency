var gulp = require('gulp'),
    autoprefixer = require('autoprefixer'),
    nested_css = require('postcss-nested'),
    css_import = require('postcss-import'),
    cssvars = require('postcss-simple-vars'),
    mixins = require('postcss-mixins'),
    postcss = require('gulp-postcss');

gulp.task('styles', function () {
    console.log('in here');
    return gulp.src('./app/assets/styles/styles.css')
        .pipe(postcss([css_import, mixins, cssvars, nested_css, autoprefixer]))
        .on('error', function (error_info) {
            console.log(error_info.toString());
            this.emit('end');
        })
        .pipe(gulp.dest('./app/temp/styles'));
});