import {isBuildingToProduction, isBuildingToStage} from './process-argv';

let fingerprint = null;

export function shouldInsertFingerprints(){
  return isBuildingToProduction() || isBuildingToStage();
}

export function getFingerprint(){
  if(!fingerprint){
    fingerprint = new Date().getTime();
    return fingerprint;
  }
  return fingerprint;
}
