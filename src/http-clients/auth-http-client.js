import {inject} from 'aurelia-framework';
import {BaseHttpClient} from 'http-clients/base-http-client';

@inject(BaseHttpClient)
export class AuthHttpClient {

  constructor(baseHttpClient){
    this.baseHttpClient = baseHttpClient;
  }

  login(username, password){
    return this.baseHttpClient.post('auth/login', {
      user: username,
      pass: password
    });
  }

  logout() {
    return this.baseHttpClient.get('auth/logout');
  }
}
