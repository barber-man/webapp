import {inject} from 'aurelia-framework';
import {StorageService} from 'services/storage-service';
import {storageConstant} from 'constants/storage-constant';

@inject(StorageService)
export class AlertService {
  constructor(storageService){
    this.storageService = storageService;
  }

  set(alert){
    let alerts = this.get();
    alerts.push(alert);
    this.setAlerts(alerts);
  }

  get(){
    let alerts = this.storageService.get(storageConstant.alerts);
    return alerts ? JSON.parse(alerts) : [];
  }

  destroy(alert){
    let alerts = this.get();
    let alertIndex = this.findAlertIndex(alerts, alert.id);
    alerts.splice(alertIndex, 1);
    this.setAlerts(alerts);
  }

  findAlertIndex(alerts, alertId){
    for (var i = 0; i < alerts.length; i++)
      if(alerts[i].id == alertId)
        return i;
  }

  setAlerts(alerts){
    this.storageService.set(storageConstant.alerts, JSON.stringify(alerts));
  }
}
