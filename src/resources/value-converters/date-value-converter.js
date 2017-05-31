import {inject} from 'aurelia-framework';
import {DateService} from 'services/date-service';
import Moment from 'moment';

@inject(DateService)
export class DateValueConverter {
  constructor(dateService){
    this.dateService = dateService;
  }

  toView(value, format){
    return this.dateService.format(value, format);
  }

  fromView(value){
    value = value.split('/');
    let day = value[0];
    let month = value[1] - 1;
    let year = value[2];
    return new Date(year, month, day, 0, 0, 0, 0).getTime();
  }
}
