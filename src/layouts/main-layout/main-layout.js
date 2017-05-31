import {inject, bindable} from 'aurelia-framework';
import {AppRouter} from 'aurelia-router';

@inject(AppRouter)
export class MainLayout {

  constructor(appRouter){
    this.appRouter = appRouter;
  }

  attached(){
    this.scrollToLayoutTop();
  }

  scrollToLayoutTop(){
    $('html, body').scrollTop(0);
  }
}
