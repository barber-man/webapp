import {inject} from 'aurelia-framework';
import {PlanHttpClient} from 'http-clients/plan-http-client';
import {plans} from 'constants/plans-constant';

@inject(PlanHttpClient)
export class PlanService {
  constructor(planHttpClient){
    this.planHttpClient = planHttpClient;
    this.plans = plans;
  }

  getPlan(planId){
    let planBasicInfo = this.getBasicInfo(planId);
    return new Promise((resolve, reject) => {
      this.planHttpClient.getPlan(planBasicInfo.backendPlanId)
        .then(data => {
          let recurrences = this.getRecurrences(data.body.recurrences);
          let planFullInfo = this.mergeRecurrencesDataIntoPlan(planBasicInfo, recurrences);
          resolve(planFullInfo);
        }, error => {
          reject(error);
        });
    });
  }

  getBasicInfo(planId){
    return $.extend(true, {}, plans[planId]);
  }

  getRecurrences(data){
    let recurrences = [];
    for (var i = 0; i < data.length; i++)
      recurrences.push(this.getRecurenceData(data[0], data[i]));
    return {
      recurrences: recurrences
    };
  }

  getRecurenceData(baseRecurrence, currentRecurrence){
    return {
      id: currentRecurrence.id,
      name: currentRecurrence.product.name,
      value: {
        unit: baseRecurrence.product.value,
        current: currentRecurrence.product.value
      },
      devices: [{
        id: currentRecurrence.product.productReference.id,
        name: currentRecurrence.product.productReference.name,
        quantity: currentRecurrence.product.quantity,
        value: {
          unit: baseRecurrence.product.productReference.value
        }
      }]
    };
  }

  mergeRecurrencesDataIntoPlan(plan, recurrences){
    return $.extend(true, {}, plan, recurrences);
  }
}
