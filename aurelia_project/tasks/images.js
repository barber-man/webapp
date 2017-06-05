import gulp from 'gulp';
import changedInPlace from 'gulp-changed-in-place';
import imagemin from 'gulp-imagemin';
import project from '../aurelia.json';
import {build} from 'aurelia-cli';

export default function images() {
  return gulp.src(project.images.source)
    .pipe(changedInPlace({firstPass: true}))
    .pipe(imagemin())
    .pipe(gulp.dest(project.images.dist));
}
