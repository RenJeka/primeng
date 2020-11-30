const gulp = require('gulp');
const pug = require('gulp-pug');
const watch = require('gulp-watch');
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');
const del = require('del');

const paths = {
  pugFiles: ['./src/**/*.pug'],
  htmlFiles: ['./src/app/**/*.html'],
};


// const showErrorMessages = {
//   errorHandler: notify.onError({
//     title: 'Ошибка в плагине <%= error.plugin %>',
//     message: 'Описание: <%= error.message %>'
//   })
// };
//


// let task = gulp.task('pug-watch', () => {
//   watch(paths.pugFiles)
//     .on(('change'), (file) => {
//       gulp.src(file)
//         .pipe(plumber(showErrorMessages))
//         .pipe(pug({pretty: true, doctype: 'html'}))
//         .pipe(gulp.dest((file) => {
//             return file.base;
//         }));
//     });
// });



gulp.task('pug', () => {
  watch(paths.pugFiles)
    .on(('change'), (filePath) => {
      gulp.src(filePath)
        .pipe(pug({
          pretty: true, doctype: 'html'
        }))
        .pipe(gulp.dest((filePathDestination) => {
            return filePathDestination.base;
        }))
    });
});
