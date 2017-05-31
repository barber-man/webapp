import gulp from 'gulp';
import transpile from './transpile';
import processMarkup from './process-markup';
import scriptsVendor from './scripts-vendor';
import processCSS from './process-css';
import processCSSVendor from './process-css-vendor';
import processCSSVendorImages from './process-css-vendor-images';
import processCSSVendorFonts from './process-css-vendor-fonts';
import images from './images';
import {insertFingerprints, writeRobotsMetaTags, reviseVendorBundle} from './process-index';
import {build} from 'aurelia-cli';
import project from '../aurelia.json';

export default gulp.series(
  readProjectConfiguration,
  gulp.parallel(
    insertFingerprints,
    transpile,
    processMarkup,
    scriptsVendor,
    processCSS,
    processCSSVendor,
    processCSSVendorFonts,
    images
  ),
  writeRobotsMetaTags,
  writeBundles,
  reviseVendorBundle
);

function readProjectConfiguration() {
  return build.src(project);
}

function writeBundles() {
  return build.dest();
}
