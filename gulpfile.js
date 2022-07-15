var gulp = require('gulp'),
	plumber = require('gulp-plumber');
	sass = require('gulp-sass'),

gulp.task('compilar-sass', function(){
	return gulp.src('app/sass/*.sass')
		.pipe(plumber())
		.pipe(sass())
		.pipe(gulp.dest('assets/css/'))
});

gulp.task('watch',function(){
	gulp.watch('app/sass/*.sass',['compilar-sass']);
});


gulp.task('default',['compilar-sass', 'watch']);



