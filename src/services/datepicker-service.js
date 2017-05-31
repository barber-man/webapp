export class DatepickerService {
  build(element, config){
    return $(element).flatpickr(config);
  }

  format(value){
    if(value.indexOf('/') > -1){
      value = value.split('/');
      return [value[2], value[1], value[0]].join('-');
    }
    return value;
  }
}
