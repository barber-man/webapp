import {inject} from 'aurelia-framework';
import {BaseHttpClient} from 'http-clients/base-http-client';

@inject(BaseHttpClient)
export class LoginHttpClient {
  constructor(baseHttpClient){
    this.baseHttpClient = baseHttpClient;
  }

  auth(username, password){
    return this.baseHttpClient.post('auth/login', {
      user: username,
      pass: password
    });
  }
}
