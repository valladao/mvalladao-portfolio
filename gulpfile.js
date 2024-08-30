const gulp = require("gulp")
const sass = require("gulp-sass")(require("sass"))
const ts = require("gulp-typescript")
const uglify = require("gulp-uglify")
const cleanCSS = require("gulp-clean-css")
const rename = require("gulp-rename")
const concat = require("gulp-concat")

// Paths
const paths = {
  styles: "./styles/**/index.scss",
  scripts: "./scripts/**/index.ts",
  snippetsSrc: "./snippets-src/**/*.liquid",
  criticalCss: "./styles/critical-css/**/*.scss"
}

// Task to compile SCSS files
gulp.task("styles", function () {
  return gulp
    .src(paths.styles)
    .pipe(sass().on("error", sass.logError))
    .pipe(cleanCSS())
    .pipe(
      rename(function (path) {
        path.basename = path.dirname.replace("/", "-")
        path.dirname = "" // Clear the directory path
        path.extname = ".css"
      })
    )
    .pipe(gulp.dest("./assets"))
})

// Task to compile TypeScript files
gulp.task("scripts", function () {
  return gulp
    .src(paths.scripts)
    .pipe(
      ts({
        noImplicitAny: true,
        outFile: "output.js"
      })
    )
    .pipe(uglify())
    .pipe(
      rename(function (path) {
        path.basename = path.dirname.replace("/", "-")
        path.dirname = "" // Clear the directory path
        path.extname = ".js"
      })
    )
    .pipe(gulp.dest("./assets"))
})

// Task to process Liquid snippets from snippets-src
gulp.task("snippets", function () {
  return gulp
    .src(paths.snippetsSrc)
    .pipe(
      rename(function (path) {
        path.basename = path.dirname
          ? path.dirname.replace("/", "-")
          : path.basename
        path.dirname = "" // Clear the directory path
      })
    )
    .pipe(gulp.dest("./snippets"))
})

// Task to compile Critical CSS to Liquid snippets
gulp.task("critical-css", function () {
  return gulp
    .src(paths.criticalCss)
    .pipe(sass().on("error", sass.logError))
    .pipe(cleanCSS())
    .pipe(
      rename(function (path) {
        path.extname = ".liquid"
      })
    )
    .pipe(gulp.dest("./snippets"))
})

// Watch task
gulp.task("watch", function () {
  gulp.watch(paths.styles, gulp.series("styles"))
  gulp.watch(paths.scripts, gulp.series("scripts"))
  gulp.watch(paths.snippetsSrc, gulp.series("snippets"))
  gulp.watch(paths.criticalCss, gulp.series("critical-css"))
})

// Default task
gulp.task(
  "default",
  gulp.series("styles", "scripts", "snippets", "critical-css", "watch")
)
