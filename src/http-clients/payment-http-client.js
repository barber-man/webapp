import {inject} from 'aurelia-framework';
import {BaseHttpClient} from 'http-clients/base-http-client';

@inject(BaseHttpClient)
export class PaymentHttpClient {
  constructor(baseHttpClient){
    this.baseHttpClient = baseHttpClient;
  }

  charge(order){
    return this.baseHttpClient.post('shop/checkout', order);
  }

  completePreSelling(order){
    return this.baseHttpClient.post('shop/checkout/preSelling', order);
  }
}
