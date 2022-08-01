const { src, dest, series, parallel } = require('gulp');
const clean = require('gulp-clean');
const concat = require('gulp-concat');
const cleanCSS = require('gulp-clean-css');
const uglify = require('gulp-uglify');
const babel = require('gulp-babel');

function cleanDist() {
    return src('dist/*', { read: false })
        .pipe(clean());
}

function copyHtml() {
    return src('./public/index.html').pipe(dest('./dist'));
}

function copyCss() {
    return src(['src/*.css'])
        .pipe(concat('app.css'))
        .pipe(cleanCSS({ compatibility: 'ie8' }))
        .pipe(dest('./dist/css'));
}

function copyJs() {
    return src(['./src/TodosController.js',
        './src/TodosCollection.js',
        './src/view/TodosListView.js',
        './src/view/TodoFormView.js',
        './src/scripts.js'])
        .pipe(concat('app.js'))
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(uglify())
        .pipe(dest('./dist/js'))
}

const build = parallel(copyHtml, copyCss, copyJs);

module.exports = {
    build: series(cleanDist, build)
};