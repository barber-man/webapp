import {inject, customElement, bindable} from 'aurelia-framework';

@customElement('modal')
@inject(Element)
export class Modal {

	@bindable modalTitle;
	@bindable modalId;

	@bindable successButton;
	@bindable successText;
	@bindable successClass;

	@bindable cancelButton;
	@bindable cancelText;
	@bindable cancelClass;

	@bindable modalSize;

	constructor(element) {

		this.successButton = true;
		this.successText = 'OK';
		this.successClass = 'btn-primary'

		this.cancelButton = true;
		this.cancelText = 'Cancelar';
		this.cancelClass = 'btn-danger';

		this.modalSize = 'md';
		this.element = element;

		this.registerEvents();
	}

	bind() {
		$(this.element).attr('id', this.modalId);
	}

	success() {
		var event = new CustomEvent('success', {
			bubbles: true
		});
		this.element.dispatchEvent(event);
	}

	show() {
		this.calculaOverflow()
		$('.modal-overlayer', this.element).fadeIn('fast');
	}

	close() {
		$('.modal-overlayer', this.element).fadeOut('fast');
	}

	registerEvents() {
		this.registerShowEvent();
	}

	registerShowEvent() {
		var self = this;
		console.log('registerShowEvent')
		$(document).off('click', '[data-toggle="modal"]');
		$(document).on('click', '[data-toggle="modal"]', function(event) {
			event.preventDefault();
			let target =  $(this).attr('data-target');
			self.calculaOverflow(target);
			$('.modal-overlayer', target).fadeIn('fast');
		});
	}

	calculaOverflow(target) {
		$('.modal-overlayer', target).height( $(window).height() );
	}

}