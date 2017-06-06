import {inject, bindable} from 'aurelia-framework';
import {AppRouter} from 'aurelia-router';
import {AuthHttpClient} from 'http-clients/auth-http-client';


@inject(AppRouter, AuthHttpClient)
export class RegisterForm {
	@bindable register;

	constructor(appRouter, authHttpClient) {
		this.appRouter = appRouter;
		this.authHttpClient = authHttpClient;
		this.submitText = 'Cadastrar';
		this.clearRegister()
	}

	clearRegister() {
		this.register = {
			name: '',
			email: '',
			password: '',
			gender: '',
			birthday: ''
		};
	}

	submitRegister() {
		this.submitText = 'Cadastrando...';
		this.registerUser(this.register);
	}

	registerUser(user) {
		this.authHttpClient.register(user).then();
	}


}