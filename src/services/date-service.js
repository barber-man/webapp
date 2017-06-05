import Moment from 'moment';

export class DateService {
  format(date, format = 'DD/MM/YYYY'){
    let moment = new Moment(date);
    return moment.format(format);
  }

  subtract(amount, unit, date = new Date()){
    let moment = new Moment(date);
    return moment.subtract(amount, unit).toDate();
  }

  clearHours(date = new Date()){
    let base = this.getBaseDate(date);
    return new Date(base.year, base.month, base.day, 0, 0, 0, 0);
  }

  clearSeconds(date = new Date()){
    let base = this.getBaseDate(date);
    let hour = date.getHours();
    let minute = date.getMinutes();
    return new Date(base.year, base.month, base.day, hour, minute, 0, 0);
  }

  getToday(){
    return this.clearHours();
  }

  getStartOf(unit, date = new Date()){
    return new Moment(date).startOf(unit).toDate();
  }

  getEndOf(unit, date = new Date()){
    return new Moment(date).endOf(unit).toDate();
  }

  getBaseDate(date){
    return {
      day: date.getDate(),
      month: date.getMonth(),
      year: date.getFullYear()
    };
  }
}
