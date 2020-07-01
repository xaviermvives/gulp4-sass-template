const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass');


//compile scss into css
function compileSass() {
    return gulp.src('./sass/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css/'))
        .pipe(browserSync.stream());
}

function watch(){
    browserSync.init({
        server: {
            baseDir: './'
        }
    });
    gulp.watch('./sass/*.scss', compileSass);
    gulp.watch('./*.html').on('change', browserSync.reload);
}

//create task
exports.compileSass = compileSass;
exports.watch = watch;