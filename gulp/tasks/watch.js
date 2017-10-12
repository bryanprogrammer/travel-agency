var gulp = require('gulp'),
    watch = require('gulp-watch'),
    browser_sync = require('browser-sync').create();

/*Default task*/
gulp.task('default', function () {
    console.log("nice one msee");
});

gulp.task('html', function () {
    browser_sync.reload();
});

gulp.task('watch', function () {
    browser_sync.init({
        notify: false,
        server: {
            baseDir: "app"
        }
    })
    watch("./app/index.html", function () {
        gulp.start('html');
    });
    watch("./app/assets/styles/**/*.css", function () {
        gulp.start('css_inject');
    });
});

/*style task is dependency of css_inject*/
gulp.task('css_inject', ['styles'], function(){
    return gulp.src('./app/assets/styles/styles.css')
        .pipe(browser_sync.stream());
});