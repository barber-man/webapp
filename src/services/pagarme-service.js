import environment from '../environment';

export class PagarmeService {
  constructor(){
    this.encryptionKey = environment.pagarmeEncryptionKey;
  }

  getTransactionData(amount){
    let popupAmount = this.parseAmountToPagarmeFormat(amount);
    return new Promise((resolve, reject) => {
      let checkout = new PagarMeCheckout.Checkout({
        encryption_key: this.encryptionKey,
        success: resolve,
        error: reject
      });
      checkout.open({
        customerData: 'false',
        createToken: 'false',
        paymentMethods: 'credit_card',
        maxInstallments: '6',
        amount: popupAmount
      });
    });
  }

  parseAmountToPagarmeFormat(amount){
    return amount.toFixed(2).replace(/\./g,'');
  }
}
