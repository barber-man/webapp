import {argv} from 'yargs';

export function isBuildingToProduction(){
  return argv.env == 'prod';
}

export function isBuildingToStage(){
  return argv.env == 'stage';
}
