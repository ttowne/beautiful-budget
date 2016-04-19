var serve = require('gulp-serve'),
    eslint = require('gulp-eslint'),
    gulp = require('gulp'),
    karma = require('karma');

gulp.task('serve', serve([
    'src'
]));

gulp.task('eslint', function () {
    return gulp.src([
        'src/**/*.js'
    ]).pipe(eslint()).pipe(eslint.format()).pipe(eslint.failAfterError());
});

gulp.task('test', function (done) {
    return new karma.Server({
        configFile: __dirname + '/karma.js'
    }, done).start();
});
