import {inject} from 'aurelia-framework';
import {AppRouter} from 'aurelia-router';
import {AuthHttpClient} from 'http-clients/auth-http-client';
import {StorageService} from 'services/storage-service';
import {LocationService} from 'services/location-service';
import {storageConstant} from 'constants/storage-constant';

@inject(AppRouter, AuthHttpClient, StorageService, LocationService)
export class LoginService {
  
  constructor(appRouter, authHttpClient, storageService, locationService){
    this.appRouter = appRouter;
    this.authHttpClient = authHttpClient;
    this.storageService = storageService;
    this.locationService = locationService;
  }

  login(username, password){
    return this.authHttpClient.login(username, password)
      .then(response => {
        this.redirectLoggedInUser();
      });
  }

  redirectLoggedInUser(){
    let params = this.locationService.getParams();
    let route = ''
    if(params && params.routeRedirect)
      route = params.routeRedirect;
    this.appRouter.navigate(route);
  }

  isLoggedIn(){
    if(this.storageService.get(storageConstant.auth))
      return true;
  }
}
