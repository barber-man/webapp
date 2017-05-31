import {bindable, inject} from "aurelia-framework";

@bindable('dataType')
@inject(Element)
export class Footer {

	constructor(element){
		this.element = element;
	}

	attached(){
		this.bindMenuMapButtons();
	}

	bindMenuMapButtons(){
		if ($(window).width()<768)
			$('.section-footer-map-submenu-title', this.element).on('click', this.toggleMenuMap);
	}

	toggleMenuMap() {
		var $menu = $(this).parent('.section-footer-map-submenu');
		$menu.toggleClass('active');
		$menu.children('.section-footer-map-submenu-links').slideToggle('fast')
	}

}
