import {inject} from 'aurelia-framework';
import {PaymentHttpClient} from 'http-clients/payment-http-client';
import {PagarmeService} from 'services/pagarme-service';

@inject(PaymentHttpClient, PagarmeService)
export class PaymentService {
  constructor(paymentHttpClient, pagarmeService){
    this.paymentHttpClient = paymentHttpClient;
    this.pagarmeService = pagarmeService;
  }

  charge(order, amount){
    return new Promise((resolve, reject) => {
      this.pagarmeService.getTransactionData(amount)
        .then(data => {
          order.clientOrder.creditCardHash = data.card_hash;
          order.clientOrder.installments = data.installments;
          this.paymentHttpClient.charge({
              clientOrder: JSON.stringify(order.clientOrder)
            }).then(resolve, reject);
        });
    });
  }

  completePreSelling(order, amount) {
    return new Promise((resolve, reject) => {
      this.pagarmeService.getTransactionData(amount)
        .then(data => {
          order.clientPackageOrder.creditCardHash = data.card_hash;
          order.clientPackageOrder.installments = data.installments;
          this.paymentHttpClient.completePreSelling({
              clientPackageOrder: JSON.stringify(order.clientPackageOrder)
            }).then(resolve, reject);
        });
    });
  }
}
