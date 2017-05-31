 import {inject} from 'aurelia-framework';
import {BaseHttpClient} from 'http-clients/base-http-client';

@inject(BaseHttpClient)
export class UserHttpClient {
  constructor(baseHttpClient){
    this.baseHttpClient = baseHttpClient;
  }

  create(user){
    return this.baseHttpClient.post('shop/clients', user);
  }

  getCurrentUser(){
    return this.baseHttpClient.get('auth/user/current');
  }

  updateUser(user){
    return this.baseHttpClient.update('auth/user', user.id, user);
  }

  recoverPassword(emailAddress){
    return this.baseHttpClient.post('auth/recovery_password', {
      email: emailAddress
    });
  }

  resetPassword(token, newPassword){
    return this.baseHttpClient.post('auth/reset_password', {
      token: token,
      password: newPassword
    });
  }

  getOrders(){
    return this.baseHttpClient.get('shop/packageOrder');
  }

  getSubscriptions(){
    return this.baseHttpClient.get('shop/signatures');
  }

  cancelOrder(orderId){
    return this.baseHttpClient.update('shop/packageOrder/completeCancellation', orderId);
  }

  cancelSubscription(orderId){
    return this.baseHttpClient.update('shop/packageOrder/partialCancellation', orderId);
  }

  getPreSellings() {
    return this.baseHttpClient.get('shop/preSellings');
  }

  cancelPreSelling(packageOrderId) {
    return this.baseHttpClient.update('shop/preSelling/cancel', packageOrderId);
  }

  completePreSelling(preOrder) {
    return this.baseHttpClient.post('shop/checkout/preSelling', preOrder)
  }

  validateToken(){
    return this.baseHttpClient.get('auth/ping');
  }
}
