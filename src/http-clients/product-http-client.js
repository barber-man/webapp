import {inject} from 'aurelia-framework';
import {BaseHttpClient} from 'http-clients/base-http-client';

@inject(BaseHttpClient)
export class ProductHttpClient {
  constructor(baseHttpClient){
    this.baseHttpClient = baseHttpClient;
  }

  getProduct(productId){
    return this.baseHttpClient.get('shop/products', null, productId);
  }
}
