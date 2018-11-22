/**
 * @type 2018-11-21  oribal81@daum.ent
 */


// gulpfile.js
var gulp = require('gulp')
var sass = require('gulp-sass')

// 일반 컴파일
gulp.task('sass', function () {
	return gulp.src('scss/*.scss')  // 입력 경로
		.pipe(sass().on('error', sass.logError))
		/*.pipe(uglifycss({
			"maxLineLen": 80,
			"uglyComments": false
		}))*/
		.pipe(gulp.dest('css'));  // 출력 경로
});

// 런타임 중 파일 감시
gulp.task('sass:watch', function () {
	gulp.watch('scss/*.scss', ['sass']);  // 입력 경로와 파일 변경 감지 시 실행할 Actions(Task Name)
});