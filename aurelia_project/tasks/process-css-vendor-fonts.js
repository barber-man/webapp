import gulp from 'gulp';
import project from '../aurelia.json';
import {build} from 'aurelia-cli';

export default function processCSSVendorFonts() {
  return gulp.src(project.cssFontsVendor.source)
    .pipe(gulp.dest(project.cssFontsVendor.dist));
}
