var gulp = require('gulp');
var minifycss = require('gulp-minify-css');
var uglify = require('gulp-uglify');
var htmlmin = require('gulp-htmlmin');
var htmlclean = require('gulp-htmlclean');
var imagemin = require('gulp-imagemin');

// 压缩html
gulp.task('minify-html', function() {
    return gulp.src('./public/**/*.html')
        .pipe(htmlclean())
        .pipe(htmlmin({
            removeComments: true,
            minifyJS: true,
            minifyCSS: true,
            minifyURLs: true,
        }))
        .pipe(gulp.dest('./public'))
});
// 压缩css
gulp.task('minify-css', function() {
    return gulp.src('./public/**/*.css')
        .pipe(minifycss({
            compatibility: 'ie8'
        }))
        .pipe(gulp.dest('./public'));
});
// 压缩js
gulp.task('minify-js', function() {
    return gulp.src('./public/js/**/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./public'));
});
// 压缩public图片
gulp.task('minify-images', function() {
    return gulp.src('./source/images/*.*')
        .pipe(imagemin({ progressive: false}))
        .pipe(gulp.dest('./source/images'))
});

// 压缩source中图片
gulp.task('minify-images2', function() {
    return gulp.src('./source/_posts/**/*.*')
        .pipe(imagemin(
        [imagemin.gifsicle({'optimizationLevel': 3}), 
        imagemin.jpegtran({'progressive': false}), 
        imagemin.optipng({'optimizationLevel': 7}), 
        imagemin.svgo()],
        {'verbose': true}))
        .pipe(gulp.dest('./source/_posts'))
});
// 默认任务
// gulp.task('default', [
//     'minify-html','minify-css','minify-js','minify-images','minify-images2'
// ]);

gulp.task('default', gulp.parallel('minify-html','minify-css','minify-js','minify-images','minify-images2',function(){}
));

