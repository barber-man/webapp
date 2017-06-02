import {inject} from 'aurelia-framework';
import {AppRouter} from 'aurelia-router';

@inject(AppRouter)
export class LocationService {
    constructor(appRouter){
        this.appRouter = appRouter;
    }

    searchParams(params){
        let currentRouteName = this.appRouter.currentInstruction.config.name;
        if(params)
            this.setParams(currentRouteName, params);
        return this.getParams();
    }

    setParams(currentRouteName, params){
        this.appRouter.navigateToRoute(currentRouteName, params);
    }

    getParams(){
        return this.appRouter.currentInstruction.queryParams;
    }

    getRouteParams(){
        return this.appRouter.currentInstruction.params;
    }
}