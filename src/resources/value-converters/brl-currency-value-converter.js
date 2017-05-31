import {inject} from 'aurelia-framework';
import {CurrencyService} from 'services/currency-service';

@inject(CurrencyService)
export class BrlCurrencyValueConverter {
  constructor(currencyService){
    this.currencyService = currencyService;
  }

  toView(value){
    return this.currencyService.format(value);
  }
}
