import gulp from 'gulp';
import concat from 'gulp-concat';
import project from '../aurelia.json';
import {build} from 'aurelia-cli';

export default function scriptsVendor() {
  return gulp.src(project.scriptsVendor.source)
    .pipe(concat('libs.min.js'))
    .pipe(gulp.dest(project.scriptsVendor.dist));
}
