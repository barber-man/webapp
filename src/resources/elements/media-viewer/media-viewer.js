import {inject} from 'aurelia-framework';
import {MediasHttpClient} from 'http-clients/medias-http-client';

@inject(MediasHttpClient)
export class MediaViewer {

	constructor(mediasHttpClient) {
		this.mediasHttpClient = mediasHttpClient;
		this.medias;
	}

	getMedias() {
		this.mediasHttpClient.getMedias().then(resolve => {
			this.medias = resolve.results;
		}, fail => {

		});
	}

	crop(image, size) {
		console.log('crop',image);
		var options = {debug: false, width: size, height: size};
		var _img = new Image;

		_img.crossOrigin = 'Anonymous';
		_img.onload = function() {
			window.setTimeout(function() {
				var img = this;
				console.log('start crop');
				smartcrop.crop(img, options, function(result) {
					console.log('cropping');

					// console.log(img.src, result);
					var crop = result.topCrop;
					var canvas = $('<canvas />')[0];
					var ctx = canvas.getContext('2d');
					canvas.width = options.width;
					canvas.height = options.height;
					ctx.drawImage(img, crop.x, crop.y, crop.width, crop.height, 0, 0, canvas.width, canvas.height);

					$(image).hide().after(canvas);
					// .parent()
					// .append($('<pre>').text(JSON.stringify(crop.score)));
					console.log('crop end');
				});
			}.bind(this), 100);
		};
		_img.src = image.src;
	}

}