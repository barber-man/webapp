import {inject} from 'aurelia-framework';
import {AppRouter} from 'aurelia-router';

@inject(AppRouter)
export class LoginService {
  constructor(appRouter){
    this.appRouter = appRouter;
  }

  login(username, password){
    
  }

  redirectLoggedInUser(){
    this.appRouter.navigate('');
  }

  isLoggedIn(){
    return true;
  }
}
