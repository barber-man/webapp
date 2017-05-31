import {inject} from 'aurelia-framework';
import {UserHttpClient} from 'http-clients/user-http-client';
import {DateService} from 'services/date-service';
import {CurrencyService} from 'services/currency-service';
import {orderConstants} from 'constants/order-constants';
import {subscriptionConstants} from 'constants/subscription-constants';

@inject(UserHttpClient, DateService, CurrencyService)
export class UserService {
  constructor(userHttpClient, dateService, currencyService){
    this.userHttpClient = userHttpClient;
    this.dateService = dateService;
    this.currencyService = currencyService;
    this.CANCELLATION_MESSAGE_TEMPLATE =  'Deseja realmente cancelar o ' +
                                          '${itemType} feito em ${date} no ' +
                                          'valor de ${value}?';
  }

  getCurrentUser(){
    return this.userHttpClient.getCurrentUser()
      .then(response => {
        return response.body;
      });
  }

  updateUserInfo(user){
    return this.userHttpClient.updateUser(user);
  }

  recoverPassword(emailAddress){
    return this.userHttpClient.recoverPassword(emailAddress);
  }

  resetPassword(token, newPassword){
    return this.userHttpClient.resetPassword(token, newPassword);
  }

  getSubscriptions(){
    return this.userHttpClient.getSubscriptions().then(response => {
      return this.formatSubscriptions(response.body);
    }, error => {
      console.log(error);
    });
  }

  formatSubscriptions(subscriptions){
    let formattedSubscriptions = [];
    if(subscriptions){
      for (var i = 0; i < subscriptions.length; i++) {
        let formattedSubscription = this.formatSubscription(subscriptions[i]);
        formattedSubscriptions.push(formattedSubscription);
      };
    }
    return formattedSubscriptions;
  }

  formatSubscription(subscription){
    let order = subscription.packageOrders[0];
    return {
      createdOn: this.dateService.clearHours(new Date(order.created)),
      quantity: order.recurrenceOrder.quantity,
      name: order.recurrenceOrder.product.name,
      value: order.recurrenceOrder.totalValue,
      status: this.getItemStatus(subscription.status, 'subscription'),
      canCancelSubscription: this.canCancelSubscription(subscription),
      order: {
        id: order.id,
        number: order.orderNumber,
        devices: [{
          id: order.productOrder.id,
          name: order.productOrder.product.name,
          quantity: order.productOrder.quantity,
          value: order.productOrder.totalValue,
          status: this.getItemStatus(order.productOrder.status, 'order')
        }],
        canCancelOrder: this.canCancelOrder(subscription, order)
      }
    };
  }

  getItemStatus(status, itemType){
    if(itemType == 'order')
      return orderConstants.statuses[status];
    return subscriptionConstants.statuses[status];
  }

  canCancelOrder(subscription, order){
    return subscription.status == 'WaitingInstallation' &&
      order.productOrder.status == 'Paid';
  }

  canCancelSubscription(subscription){
    return subscription.status == 'Installed';
  }

  cancelOrder(orderId){
    return this.userHttpClient.cancelOrder(orderId);
  }

  cancelSubscription(orderId){
    return this.userHttpClient.cancelSubscription(orderId);
  }

  buildCancellationMessage(itemType, date, value){
    itemType = itemType == 'order' ? 'pedido' : 'plano';
    date = this.dateService.format(date);
    value = this.currencyService.format(value);
    return this.CANCELLATION_MESSAGE_TEMPLATE
      .replace('${itemType}', itemType)
      .replace('${date}', date)
      .replace('${value}', value);
  }

  getPreSellings() {
    return this.userHttpClient.getPreSellings();
  }

  cancelPreSelling(packageOrderId) {
    return this.userHttpClient.cancelPreSelling(packageOrderId);
  }

  completePreSelling(preOrder) {
    return this.userHttpClient.completePreSelling(preOrder)
  }

  validateToken(){
    return this.userHttpClient.validateToken();
  }
}
