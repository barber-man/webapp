import gulp from 'gulp';
import replace from 'gulp-replace';
import gulpIf from 'gulp-if';
import project from '../aurelia.json';
import {shouldInsertFingerprints, getFingerprint} from './process-fingerprint';
import {isBuildingToProduction, isBuildingToStage} from './process-argv';

export function insertFingerprints() {
  let regex = new RegExp(/{{fingerprint}}/g);

  return gulp.src(project.index.source)
    .pipe(gulpIf(shouldInsertFingerprints(), replace(regex, getFingerprint())))
    .pipe(gulp.dest(project.index.dist));
}

export function writeRobotsMetaTags(){
  let regex = new RegExp(/{{robotsTagContent}}/g);
  let tagContent = 'noIndex, noFollow';
  if(isBuildingToProduction())
    tagContent = 'index, follow';

  return gulp.src(project.index.output)
    .pipe(replace(regex, tagContent))
    .pipe(gulp.dest(project.index.dist));
}

export function reviseVendorBundle() {
  let regex = new RegExp(/(vendor-bundle-.{10}\.js)/g);

  return gulp.src(project.index.output)
    .pipe(gulpIf(shouldInsertFingerprints(), replace(regex, `$1?${getFingerprint()}`)))
    .pipe(gulp.dest(project.index.dist));
}
