import environment from '../environment';

export class ApiService {
  getDefaultApiBaseUrl(){
    return environment.apiBaseUrl;
  }
}
