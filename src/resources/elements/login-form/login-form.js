import {inject, bindable} from 'aurelia-framework';
import {AppRouter} from 'aurelia-router';
import {LoginService} from 'services/login-service';

@inject(AppRouter, LoginService)
export class LoginForm {
	@bindable username;
	@bindable password;

	constructor(appRouter, loginService) {
		this.appRouter = appRouter;
		this.loginService = loginService;
	}

	bind() {

	}

	submitLogin() {
		this.loginService.login(this.username, this.password);
	}


}