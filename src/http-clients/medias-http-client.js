 import {inject} from 'aurelia-framework';
import {BaseHttpClient} from 'http-clients/base-http-client';

@inject(BaseHttpClient)
export class MediasHttpClient {
	constructor(baseHttpClient){
		this.baseHttpClient = baseHttpClient;
	}

	getMedias() {
		return this.baseHttpClient.get('manage/images');
	}

}
