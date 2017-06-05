import {inject} from 'aurelia-framework';
import {AppRouter} from 'aurelia-router';
import {LoginService} from 'services/login-service';

@inject(AppRouter, LoginService)
export class RouteStepAuth {
  constructor(appRouter, authService){
    this.appRouter = appRouter;
    this.authService = authService;
  }

  run(routingContext, next){
    let routeName = routingContext.config.name;
    let isUserLoggedIn = this.authService.isLoggedIn();
    let isPublicRoute = this.isPublicRoute(routingContext.config);

    if(this.shouldRedirectLoggedInUser(isUserLoggedIn, routeName))
      return next.cancel(this.authService.redirectLoggedInUser());
    else if(isUserLoggedIn || isPublicRoute)
      return next();
    return next.cancel(this.redirectTo('login'));
  }

  shouldRedirectLoggedInUser(isUserLoggedIn, routeName){
    return isUserLoggedIn && (routeName == 'login' || routeName == 'signup');
  }

  isRoute(routeName){
    return routeName == 'login';
  }

  isPublicRoute(routeConfiguration){
    return routeConfiguration.isPublic;
  }

  redirectTo(routeName){
    this.appRouter.navigate(routeName);
  }
}
