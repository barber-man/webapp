import gulp from 'gulp';
import concat from 'gulp-concat';
import changedInPlace from 'gulp-changed-in-place';
import sourcemaps from 'gulp-sourcemaps';
import stylus from 'gulp-stylus';
import cssmin from 'gulp-cssmin';
import gulpIf from 'gulp-if';
import replace from 'gulp-replace';
import project from '../aurelia.json';
import {build} from 'aurelia-cli';
import {shouldInsertFingerprints, getFingerprint} from './process-fingerprint';
import {isBuildingToProduction, isBuildingToStage} from './process-argv';

export default function processCSS() {
  let regex = new RegExp(/@@timestamp/g);

  return gulp.src(project.cssProcessor.source)
    .pipe(sourcemaps.init())
    .pipe(stylus({
      compress: true
    }))
    .pipe(concat('app.min.css'))
    .pipe(cssmin())
    .pipe(gulpIf(shouldInsertFingerprints(), replace(regex, getFingerprint())))
    .pipe(gulp.dest(project.cssProcessor.dist));
}
