export class NumberValueConverter {
  toView(value){
    let regex = new RegExp('[0-9]+');
    return regex.exec(value, '');
  }
}
