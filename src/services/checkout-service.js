import {inject} from 'aurelia-framework';
import {AppRouter} from 'aurelia-router';
import {EventAggregator} from 'aurelia-event-aggregator';
import {StorageService} from 'services/storage-service';
import {LoginService} from 'services/login-service';
import {storageConstant} from 'constants/storage-constant';

@inject(AppRouter, EventAggregator, StorageService, LoginService)
export class CheckoutService {
  constructor(appRouter, eventAggregator, storageService, loginService){
    this.appRouter = appRouter;
    this.eventAggregator = eventAggregator;
    this.storageService = storageService;
    this.loginService = loginService;
  }

  addToCart(item){
    let cart = this.getCart();
    cart.push(item);
    this.setCart(cart);
  }

  getCart(){
    let cart = this.storageService.get(storageConstant.cart);
    return cart ? JSON.parse(cart) : [];
  }

  setCart(cart){
    this.storageService.set(storageConstant.cart, JSON.stringify(cart));
    this.eventAggregator.publish('cartChanged');
  }

  goToCheckoutView(){
    if(this.loginService.isLoggedIn())
      this.appRouter.navigateToRoute('checkout');
    else
      this.appRouter.navigateToRoute('login', {
        routeRedirect: 'checkout'
      });
  }
}
