import {inject} from 'aurelia-framework';
import {AuthInterceptor} from 'interceptors/auth-interceptor';
import {ApiService} from 'services/api-service';
import {LogoutService} from '../services/logout-service';

@inject(ApiService, AuthInterceptor, LogoutService)
export class BaseHttpClient {
  constructor(apiService, authInterceptor, logoutService){
    this.apiBaseUrl = apiService.getDefaultApiBaseUrl();
    this.authInterceptor = authInterceptor;
    this.logoutService = logoutService;
  }

  get(resource, data, id, options){
    return this.baseRequest({
      method: 'get',
      resource: resource,
      data: data,
      id: id,
      options: options
    });
  }

  post(resource, data, options){
    return this.baseRequest({
      method: 'post',
      resource: resource,
      data: data,
      options: options
    });
  }

  update(resource, id, data, options){
    return this.baseRequest({
      method: 'put',
      resource: resource,
      id: id,
      data: data,
      options: options
    });
  }

  destroy(resource, id, data, options){
    return this.baseRequest({
      method: 'delete',
      resource: resource,
      id: id,
      data: data,
      options: options
    });
  }

  baseRequest(args){
    let thisClass = this;
    let promise = $.Deferred();
    let request = this.buildRequest(thisClass, args, promise);
    $.ajax(request);
    return promise;
  }

  buildRequest(thisClass, args, promise){
    let request = {
      method: args.method,
      url: this.buildRequestEndpoint(args),
      data: args.data || null,
      success: function(response){
        thisClass.onRequestComplete(response, promise);
      },
      error: function(error){
        thisClass.onRequestComplete(error, promise);
      }
    };
    return this.interceptRequest(request);
  }

  buildRequestEndpoint(args){
    let endpoint = `${this.apiBaseUrl}/${args.resource}`;
    if(this.shouldAppendIdOnRequestEndpoint(args))
      endpoint += `/${args.id}`;
    return endpoint;
  }

  shouldAppendIdOnRequestEndpoint(args){
    return (args.method == 'put' || args.method == 'delete') ||
      (args.method == 'get' && args.id)
  }

  interceptRequest(request){
    this.authInterceptor.includeAppTokenOnWebRequestHeader(request);
    this.authInterceptor.includeUserTokenOnWebRequestHeader(request);
    return request;
  }

  onRequestComplete(response, promise){
    this.interceptResponse(response);
    if(this.isSuccessfullResponse(response))
      promise.resolve(response);
    else
      promise.reject(response);
  }

  isSuccessfullResponse(response){
    return response && response.error && response.error < 0;
  }

  interceptResponse(response){
    if(this.authInterceptor.isAccessAuthorized(response))
      this.authInterceptor.storeToken(response.header.token);
    else
      this.logoutService.logout();
    return response;
  }
}
