import {inject} from 'aurelia-framework';
import {BaseHttpClient} from 'http-clients/base-http-client';

@inject(BaseHttpClient)
export class PlanHttpClient {
  constructor(baseHttpClient){
    this.baseHttpClient = baseHttpClient;
  }

  getPlan(planId){
    return this.baseHttpClient.get('shop/plans', null, planId);
  }
}
