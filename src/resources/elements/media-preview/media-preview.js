import {inject} from 'aurelia-framework';
import {ApiService} from 'services/api-service';
import {AuthInterceptor} from 'interceptors/auth-interceptor';

@inject(Element, ApiService, AuthInterceptor)
export class MediaPreview {
	
	constructor(element, apiService, authInterceptor) {
		this.element = element;
		this.apiService = apiService;
		this.authInterceptor = authInterceptor;
		this.dropzone = $('#dropzone', this.element);
	}

	attached() {
		this.registerDropzoneEvent();
		this.registerJQueryEvent();
	}

	registerDropzoneEvent() {

		var request = {
			fallback_id: 'fileupload',
			fallback_dropzoneClick: true,
			url: this.apiService.buildUrl('media/upload'),
			paramname: 'file',
			error: this.dropError,
			data: {
				name: function() {
					console.log('args',arguments);
					return 'filename';
				}
			},
			allowedfiletypes: ['image/jpeg','image/png','image/gif'],   // filetypes allowed by Content-Type.  Empty array means no restrictions
			allowedfileextensions: ['.jpg','.jpeg','.png','.gif'], // file extensions allowed. Empty array means no restrictions
			maxfiles: 10,
			maxfilesize: 15,
			uploadFinished: this.uploadFinished,
			progressUpdated: (i, file, progress) => {
				this.updateProgress(i, progress);
			},
			uploadStarted: (i, file) => {
				this.readURL(file, $('#media-preview [data-i="'+i+'"] img.image', this.element));
			},
			beforeSend: function(file, i, done) {
				var $viwer = createImageView();
				$viwer.attr('data-i', i);
				$('#media-preview').append($viwer);

				$('img.image', $viwer).css('max-height', $viwer.width()+'px')
									  .css('max-width', $viwer.width()+'px');

				this.data = {
					name: file.name,
					size: file.size
				};
				done();
			}
		};

		this.authInterceptor.includeUserTokenOnWebRequestHeader(request);
		this.authInterceptor.includeAppTokenOnWebRequestHeader(request);
		this.dropzone.filedrop(request);
	}

	dropError(err, file) {
		switch(err) {
			case 'BrowserNotSupported':
				bootbox.alert('Sem suporte a Drag and Drop');
				break;
			case 'TooManyFiles':
				bootbox.alert('Limite de arquivos excedido.');
				break;
			 case 'FileTooLarge':
				bootbox.alert('O arquivo '+file.name+' é muito grande.');
				break;
			case 'FileTypeNotAllowed':
				bootbox.alert('Desculpe, o tipo de arquivo é incompativel.');
				break;
			case 'FileExtensionNotAllowed':
				bootbox.alert('Arquivo com extensão inválida.');
				break;
			default:
				break;
		}
	}

	uploadFinished(i, file, response, time) {
		var $viwer = $('div.img-box[data-i="'+i+'"]', this.element);

		$viwer.data('success', response.error == -1);

		if (!$viwer.data('success')) {
			$('.progress .progress-bar', $viwer).toggleClass('progress-bar-success progress-bar-danger');
			$viwer.find('.img-remove').fadeIn('fast');
		}
	}

	updateProgress(i, progress) {
		console.log('progress',progress);
		var $bar = $('div.img-box[data-i="'+i+'"] .progress .progress-bar', this.element);
		$bar.attr('aria-valuenow', progress).width(progress+'%');
	}

	crop(image, size) {
		var options = {debug: false, width: size, height: size};
		$(image).addClass('croping');
		$(image).load(function() {
			window.setTimeout(function() {
				var img = this;
				smartcrop.crop(img, options, function(result) {
					var crop = result.topCrop;
					var canvas = $('<canvas />')[0];
					var ctx = canvas.getContext('2d');
					canvas.width = options.width;
					canvas.height = options.height;
					ctx.drawImage(img, crop.x, crop.y, crop.width, crop.height, 0, 0, canvas.width, canvas.height);
					$(img).after(canvas).hide();
				});
			}.bind(this), 100);
		});
	}

	registerJQueryEvent() {
		$(document).on('click', 'button.img-remove', function(event){
			event.preventDefault();
			var $viwer = $(this).closest('.img-box');
			if (!$viwer.data('success')) {
				$viwer.remove();
				return;
			} else {
				console.log($viwer.data('success'));
			}
		});
	}

	readURL(file, $img) {
		if (file) {
			var reader = new FileReader();

			reader.onload = (e) => {
				$img.attr('src', e.target.result);
				if (!$img.hasClass('croping'))
					this.crop($img.get(0), $img.closest('.img-box').width());
			};

			reader.readAsDataURL(file);
		}
	}

}