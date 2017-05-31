import {colorsConstant} from 'constants/colors-constant';
import {fontsConstant} from 'constants/fonts-constant';

export class HighchartsService {
  getOptions(customOptions){
    this.setGlobalOptions();
    let defaultOptions = this.getDefaultOptions(customOptions.chart.type);
    return $.extend(true, {}, defaultOptions, customOptions);
  }

  setGlobalOptions(){
    Highcharts.setOptions({
      global: {
        useUTC: false
      },
      lang: {
        shortMonths: ['Jan', 'Fev', 'Mar', 'Abr', 'Maio', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
        months: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
        weekdays: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'],
        shortWeekdays: ['Dom', 'Seg', 'Ter', 'Quar', 'Qui', 'Sex', 'Sáb'],
        decimalPoint: ',',
        thousandsSep: '.',
        noData: 'Não foram encontrados dados'
      }
    });
  }

  getDefaultOptions(chartType){
    switch (chartType){
      case 'area':
        return this.getAreaDefaultOptions();
      default:
        return this.getBaseDefaultOptions();
    }
  }

  getBaseDefaultOptions(){
    return {
      chart: {
        height: 200,
        marginBottom: 30,
        style: {
          fontFamily: fontsConstant.primaryFamily,
          color: colorsConstant.grey.dark
        }
      },
      title: {
        text: null
      },
      subtitle: {
        text: null
      },
      xAxis: {
        title: null,
        showLastLabel: true,
        endOnTick: true
      },
      yAxis: {
        title: null
      },
      legend: {
        y: 10,
        margin: 20,
        padding: 0,
        align: 'left',
        itemStyle: {
          fontWeight: 'normal',
          color: colorsConstant.grey.dark
        },
        symbolRadius: 3
      },
      tooltip: {
        xDateFormat: '%e/%m/%y'
      },
      credits: {
        enabled: false
      }
    };
  }

  getAreaDefaultOptions(){
    let baseDefaultOptions = this.getBaseDefaultOptions();
    let options = {
      plotOptions: {
        area: {
          fillOpacity: 0.35
        }
      }
    };
    return $.extend(true, {}, baseDefaultOptions, options);
  }

  plot(customOptions){
    let options = this.getOptions(customOptions);
    return new Highcharts.Chart(options);
  }
}
