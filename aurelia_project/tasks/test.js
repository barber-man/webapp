import {Server as Karma} from 'karma';

export function unit() {
  new Karma({
    configFile: __dirname + '/../../karma.conf.js'
  }, function(exitCode){
    if(exitCode === 1)
      console.log('Some test has failed!'.red);
    else
      console.log('All tests passed!'.green);
  }).start();
}

export default unit;
