 'use strict';

 var gulp = require('gulp'),
     browserSync = require('browser-sync').create(),
     reload = browserSync.reload,
     sass = require('gulp-sass'),
     path = {
     build: {
        html: 'build/*.html',
        js: 'build/js/',
        css: 'build/css/',
        img: 'build/img/',
        fonts: 'build/fonts/'
    },
    src: {
        html: 'src/*.html',
        temp: 'src/**/*.html',
        js: 'src/js/**/*.js',
        sass: 'src/scss/*.scss',
        sprites: 'src/sass/',
        css: 'src/css/',
        img: 'src/img/*.*',
        icons: 'src/img/icons/*.*',
        fonts: 'src/fonts/**/*.*'
    }
     };


gulp.task('sync', function() {
    browserSync.init({
        server: {
            baseDir: "build"
        },
        tunnel: true,
        online: false
    });
});

gulp.task("html",function(){
    gulp.src('build/index.html')
        .pipe(reload({stream: true}));
});

gulp.task("sass",function(){
    gulp.src(path.src.sass)
        .pipe(sass())
        .pipe(gulp.dest(path.build.css))
        .pipe(reload({stream: true}));
});

gulp.task("watch", function(){
    gulp.watch(path.build.html,['html']);
    gulp.watch(path.src.sass,['sass']);
});



gulp.task("default",[
    'html','sass'
]);



gulp.task("start",['sync','watch']);