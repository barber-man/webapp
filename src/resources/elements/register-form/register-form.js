import {inject, bindable} from 'aurelia-framework';
import {AppRouter} from 'aurelia-router';


@inject(AppRouter)
export class RegisterForm {
	@bindable register;

	constructor(appRouter) {
		this.appRouter = appRouter;
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
		console.log(this.register);
	}


}