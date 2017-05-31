export class GoogleSheetsHttpClient {
  constructor(){
    this.sheetsuBaseUrl = 'https://sheetsu.com/apis/v1.0';
    this.sheetsuApiKey = 'HpNEDSieNSxq5gWJMVta';
    this.sheetsuApiSecret = 'sB1kyK4LigoCuB3CsG6Y1qcN75q5tkrU2qTkoHcr';
  }

  create(resource, data){
    return new Promise((resolve, reject) => {
      $.ajax({
        url: `${this.sheetsuBaseUrl}/${resource}`,
        data: data,
        type: 'post',
        headers: {
          'Authorization': 'Basic ' + btoa(this.sheetsuApiKey + ':' + this.sheetsuApiSecret)
        },
        success: function(response){
          resolve(response);
        },
        error: function(error){
          let responseText = JSON.parse(error.responseText)
          reject(responseText.error);
        }
      });
    });
  }
}
