export class StorageService {

  set(key, value, options){
    window.localStorage.setItem(key, value);
  }

  get(key){
    return window.localStorage.getItem(key);
  }

  remove(key){
    window.localStorage.removeItem(key);
  }
}
