import gulp from 'gulp';
import imagemin from 'gulp-imagemin';
import project from '../aurelia.json';
import {build} from 'aurelia-cli';

export default function processCSSVendorImages() {
  return gulp.src(project.cssImagesProcessorVendor.source)
    .pipe(imagemin())
    .pipe(gulp.dest(project.cssImagesProcessorVendor.dist));
}
