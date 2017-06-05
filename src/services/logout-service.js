import {inject} from 'aurelia-framework';
import {AppRouter} from 'aurelia-router';
import {StorageService} from 'services/storage-service';
import {storageConstant} from 'constants/storage-constant';

@inject(AppRouter, StorageService)
export class LogoutService {
    constructor(appRouter, storageService){
        this.appRouter = appRouter;
        this.storageService = storageService;
    }

    logout(){
        this.storageService.remove(storageConstant.auth)
        this.appRouter.navigate('login');
    }
}