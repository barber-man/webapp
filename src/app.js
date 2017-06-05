import {inject} from 'aurelia-framework';
import {routes} from './routes';
import {RouteStepAuth} from './route-step-auth';

@inject(RouteStepAuth)
export class App {
  constructor(routeStepAuth){
    this.routeStepAuth = routeStepAuth;
  }

  configureRouter(config, router){
    config.title = 'Barberman';
    config.addPipelineStep('authorize', this.routeStepAuth);
    config.map(routes);
    config.mapUnknownRoutes({ redirect: '#/' });
    this.router = router;
  }
}
