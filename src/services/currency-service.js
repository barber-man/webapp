import Numeral from 'numeral';

export class CurrencyService {
  format(value){
    let formattedValue = Numeral(value).format('0,0.00')
        .replace(/\./g,'DECIMAL')
        .replace(/,/g,'.')
        .replace(/DECIMAL/g,',');
    return `R$ ${formattedValue}`;
  }
}
