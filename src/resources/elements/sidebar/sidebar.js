import {inject, bindable} from 'aurelia-framework';

@inject(Element)
export class Sidebar {

	@bindable dataWrapper;

	constructor(element) {
		this.element = element;
		this.wrapper;
		this.el;
	}

	attached() {
		this.start();
		this.registerEvents();
	}

	start() {
		this.wrapper = $(this.dataWrapper);
		this.el = $('.sidebar', this.element);
		this.setSizes();

		if ($(window).width() > 767) {
			this.el.addClass('fixed');
			this.wrapper.addClass('opened');
		}

	}

	setSizes() {
		this.el.height($(window).height());
		let h = this.el.height() - $('.logo', this.el).outerHeight(true);
		$('.root-menu', this.el).height( h-20 )
	}

	registerEvents() {
		$('.logo img', this.el).on('load', () => {
			this.setSizes();
		});

		$(window).resize(() => {
			this.setSizes();
		});

		$(document).off('click', '.toggle-sidebar')
							.on('click', '.toggle-sidebar', (event) => {
			console.log('toggle-sidebar')
			event.preventDefault();
			this.el.toggleClass('active');
			this.wrapper.toggleClass('opened');
		});

		$(this.element).off('click', '.list-group-item.dropdown > a')
							.on('click', '.list-group-item.dropdown > a', function(event) {
			console.log('dropdown')
			event.preventDefault();
			$(this).parent('.dropdown').toggleClass('active');
		});

		$(this.element).off('click', '.root-menu a:not(.dropdown-toggle)')
							.on('click', '.root-menu a:not(.dropdown-toggle)', () => {
			console.log('dropdown.root')
			this.el.removeClass('active');
		});
	}

}