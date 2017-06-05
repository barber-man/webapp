import gulp from 'gulp';
import concat from 'gulp-concat';
import cssmin from 'gulp-cssmin';
import project from '../aurelia.json';
import {build} from 'aurelia-cli';

export default function processCSSVendor() {
  return gulp.src(project.cssProcessorVendor.source)
    .pipe(concat('vendor.min.css'))
    .pipe(cssmin())
    .pipe(gulp.dest(project.cssProcessorVendor.dist));
}
