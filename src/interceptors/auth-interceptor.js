import {inject} from 'aurelia-framework';
import {StorageService} from 'services/storage-service';
import {storageConstant} from 'constants/storage-constant';
import {ApiService} from 'services/api-service';

@inject(StorageService, ApiService)
export class AuthInterceptor {
  constructor(storageService, apiService){
    this.storageService = storageService;
    this.apiService = apiService;
  }

  isAccessAuthorized(response){
    return response && response.error && response.error !== 401;
  }

  includeUserTokenOnWebRequestHeader(request){
    let token = this.getTokenFromCookies();
    if(token){
      request.headers = request.headers || {};
      request.headers[storageConstant.auth] = token;
    }
    return request;
  }

  includeAppTokenOnWebRequestHeader(request) {
    let token = this.apiService.getApiToken();
    if(token){
      request.headers = request.headers || {};
      request.headers[storageConstant.apiToken] = token;
    }
    return request;
  }

  storeToken(token){
    if(token)
      this.storageService.set(storageConstant.auth, token);
      //this.storageService.set(storageConstant.auth, `Bearer ${token}`);
  }

  getTokenFromCookies(){
    return this.storageService.get(storageConstant.auth);
  }
}
