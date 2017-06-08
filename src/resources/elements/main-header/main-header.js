import {inject} from 'aurelia-framework';
import {LogoutService} from 'services/logout-service';

@inject(LogoutService)
export class MainHeader {
	
	constructor(logoutService) {
		this.logoutService = logoutService;
	}

	logout() {
		this.logoutService.logout();
	}

}