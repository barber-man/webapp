import {inject} from 'aurelia-framework';
import {HighchartsService} from 'services/highcharts-service';

@inject(HighchartsService)
export class ChartService {
  constructor(highchartsService){
    this.highchartsService = highchartsService;
  }

  plot(options){
    this.highchartsService.plot(options);
  }
}
