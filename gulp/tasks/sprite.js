var gulp = require('gulp'),
    gulp_rename = require('gulp-rename'),
    del = require('del'),
    svg_sprite = require('gulp-svg-sprite');
var config={
    mode:{
        css: {
            sprite:'sprite.svg',
            render: {
                css:{
                    template: './gulp/templates/sprite.css'
                }
            }
        }
    }
}

gulp.task('beginClean', function(){
    return del(['./app/temp/sprite', './app/assets/images/sprites'])
})
gulp.task('createSprite', ['beginClean'],function(){
    return gulp.src('./app/assets/images/icons/**/*.svg')
        .pipe(svg_sprite(config))
        .pipe(gulp.dest('./app/temp/sprite/'));
        
});

gulp.task('copySpriteGraphic', ['createSprite'], function(){
    return gulp.src('./app/temp/sprite/css/**/*.svg')
        .pipe(gulp.dest('./app/assets/images/sprites'));
    
});

gulp.task('copySpriteCSS', ['createSprite'], function(){
    return gulp.src('./app/temp/sprite/css/*.css')
        .pipe(gulp_rename('_sprite.css'))
        .pipe(gulp.dest('./app/assets/styles/modules'));
});

gulp.task('endClean', ['copySpriteCSS', 'copySpriteGraphic'], function(){
    return del('./app/temp/sprite/');
});

gulp.task('icons', ['beginClean', 'createSprite', 'copySpriteCSS', 'copySpriteGraphic', 'endClean']);