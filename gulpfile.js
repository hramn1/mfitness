"use strict";

let gulp = require("gulp");
let plumber = require("gulp-plumber");
const sass = require('gulp-sass')(require('sass'));
let minify = require("gulp-csso");
let rename = require("gulp-rename");
let server = require("browser-sync").create();
let del = require("del");
let imagemin = require("gulp-imagemin");
let svgstore = require("gulp-svgstore");
let svgmin = require("gulp-svgmin");
let babel = require('gulp-babel');


gulp.task("images", function() {
    return gulp.src("img/**/*.{png,jpg,gif,svg}")
        .pipe(imagemin([
            imagemin.optipng({optimizationLevel: 3})
        ]))
        .pipe(gulp.dest("build/img"));
});

gulp.task("symbols", function() {
    return gulp.src("img/icons/*.svg")
        .pipe(svgmin())
        .pipe(svgstore({
            inlineSvg: true
        }))
        .pipe(rename("symbols.svg"))
        .pipe(gulp.dest("build/img"));
});



gulp.task("style", function() {
    return  gulp.src("sass/style.scss", { allowEmpty: true })
        .pipe(plumber())
        .pipe(sass())
         .pipe(minify())
         .pipe(rename("style.min.css"))
         .pipe(gulp.dest("build/css"))
         .pipe(server.stream());
});
gulp.task('scripts', function(){
    return gulp.src("js/**/*")
        .pipe(gulp.dest("build/js"))
        .pipe(server.stream());
});
gulp.task('scriptsEs5', function(){
  return gulp.src("js/**/*.js")
      .pipe(babel())
      .pipe(gulp.dest("build/js/es5"));
});

gulp.task("html:copy", function() {
    return gulp.src("*.html")
        .pipe(gulp.dest("build"));
});

gulp.task("html:update", gulp.series(gulp.task('html:copy'), function(done) {
    server.reload();
    done();
}));
gulp.task("serve", function() {
    server.init({
        server: "build/",
        notify: false,
        open: true,
        cors: true,
        ui: false
    });
    gulp.watch("sass/**/*.{scss,sass}", gulp.task('style'));
    gulp.watch("js/**/*.js", gulp.task('scripts'));
    gulp.watch("*.html", gulp.task('html:update'));
});
gulp.task("copy", function() {
    return gulp.src([
        "fonts/**/*.{woff,woff2}",
        "css/**",
        "*.html",
        "video/**"
    ], {
        base: "."
    })
        .pipe(gulp.dest("build"));
});
gulp.task("clean", function() {
    return del("build");
});
gulp.task("build", gulp.series (
    "clean",
    "copy",
    "images",
    "symbols",
    "style",
    "scriptsEs5",
    "scripts",
    "serve"
));
