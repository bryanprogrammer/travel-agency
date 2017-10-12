var gulp = require('gulp'),
    svg_sprite = require('gulp-svg-sprite');
var config={
    mode:{
        css: {
            render: {
                css:{
                    template: './gulp/templates/sprite.css'
                }
            }
        }
    }
}
gulp.task('createSprite', function(){
    return gulp.src('./app/assets/images/icons/**/*.svg')
        .pipe(svg_sprite(config))
        .pipe(gulp.dest('./app/temp/sprite/'));
        
});