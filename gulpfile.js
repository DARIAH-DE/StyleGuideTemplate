var gulp = require('gulp')
var autoprefixer = require('gulp-autoprefixer')
var concat = require('gulp-concat')
var cssnano = require('gulp-cssnano')
var filter = require('gulp-filter')
var newer = require('gulp-newer')
var notify = require('gulp-notify')
var sass = require('gulp-sass')
var sassGlob = require('gulp-sass-glob')
var uglify = require('gulp-uglify')
var wrap = require('gulp-wrap')

var paths = {
	scriptSrc: 'js/**/*.js',
	scriptDest: 'docs/assets',
	scriptWatch: 'js/**/*.js',

	styleSrc: 'scss/*.scss',
	styleDest: 'docs/assets',
	styleWatch: 'scss/**/*.scss',
}

gulp.task('scripts', function() {
	gulp.src(paths.scriptWatch)
		.pipe(newer(paths.scriptDest + '/*.js'))
		.pipe(filter(paths.scriptSrc))
		.pipe(concat('script.js'))
		.pipe(wrap(';(function () { <%=contents%> })()'))
		.pipe(uglify())
		.on('error', notify.onError({title: 'Uglify Error', message: '<%=error%>'}))
		.pipe(gulp.dest(paths.scriptDest))
})

gulp.task('styles', function() {
	gulp.src(paths.styleWatch)
		.pipe(newer(paths.styleDest + '/*.css'))
		.pipe(filter(paths.styleSrc))
		.pipe(sassGlob())
		.pipe(sass())
		.on('error', notify.onError({title: 'Sass Error', message: '<%=error%>'}))
		.pipe(cssnano())
		.pipe(autoprefixer())
		.pipe(gulp.dest(paths.styleDest))
})

gulp.task('compile', ['scripts', 'styles'])

gulp.task('default', ['scripts', 'styles'], function() {
	gulp.watch(paths.scriptWatch, ['scripts'])
	gulp.watch(paths.styleWatch, ['styles'])
})
