import environment from '../environment';

export function init(aurelia){
  aurelia.use.plugin('aurelia-google-analytics', config => {
    config.init(environment.googleAnalyticsId);
    config.attach({
      logging: {
        enabled: environment.debug
      },
      pageTracking: {
        enabled: true
      },
      clickTracking: {
        enabled: true
      }
    });
  });
}
