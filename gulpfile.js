var gulp = require('gulp'),
	browserify = require('browserify'),
	babelify = require('babelify'),
	source = require('vinyl-source-stream'),
	browserSync = require('browser-sync'),
	plumber = require('gulp-plumber'),
	reload = browserSync.reload,
	sass = require('gulp-sass'),
	concat = require('gulp-concat');


gulp.task('sass', function() {
	gulp.src('assets/sass/**/*.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(concat('build.css'))
		.pipe(gulp.dest('assets/css'));
});

gulp.task('sass:watch', ['sass'], reload);

gulp.task('transpile', function(){
    return browserify({
        entries : ['app/src/index.js'],
        debug : true
    }).on('error', function(err){
        console.log(err)
        this.emit("end");
    }).transform(babelify)
    .bundle()
    .pipe(source('index.js'))
    .pipe(gulp.dest('app/build'))
})

gulp.task('transpile:watch', ['transpile'], reload);

gulp.task('serve:dev', ['transpile', 'sass'] function(){
    browserSync.init({
        server: {
            baseDir : './'
        }
    });
    gulp.watch(['app/src/**/*.js'], ['transpile:watch']);
    gulp.watch(['assets/sass/**/*.scss'], ['sass:watch']);
})
