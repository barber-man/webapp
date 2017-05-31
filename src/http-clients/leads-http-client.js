import {inject} from 'aurelia-framework';
import {BaseHttpClient} from 'http-clients/base-http-client';

@inject(BaseHttpClient)
export class LeadsHttpClient {

	constructor(baseHttpClient) {
		this.baseHttpClient = baseHttpClient;
	}

	create(lead) {
		return this.baseHttpClient.post('shop/salesfunnel', lead);
	}

}