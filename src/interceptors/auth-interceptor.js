import {inject} from 'aurelia-framework';
import {StorageService} from 'services/storage-service';
import {storageConstant} from 'constants/storage-constant';

@inject(StorageService)
export class AuthInterceptor {
  constructor(storageService){
    this.storageService = storageService;
  }

  isAccessAuthorized(response){
    return response && response.header && response.header.httpStatus !== 401;
  }

  includeTokenOnWebRequestHeader(request){
    let token = this.getTokenFromCookies();
    if(token){
      request.headers = request.headers || {};
      request.headers[storageConstant.auth] = token;
    }
    return request;
  }

  storeToken(token){
    if(token)
      this.storageService.set(storageConstant.auth, `Bearer ${token}`);
  }

  getTokenFromCookies(){
    return this.storageService.get(storageConstant.auth);
  }
}
