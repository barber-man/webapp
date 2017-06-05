import {inject} from 'aurelia-framework'

@inject(Element)
export class Home {
  constructor(element){
    this.element = element;
    this.isMobile = (new MobileDetect(window.navigator.userAgent)).isPhoneSized();
  }

  attached(){
    this.bindHomeIntroButton();
  }

  bindHomeIntroButton(){
    $('[data-js="section-home-intro-btn"]', this.element).on('click', this.scrollToCustomerContactForm);
  }

  scrollToCustomerContactForm(){
    let formSectionOffset = $('[data-js="section-contact"]').offset();
    $('html, body').animate({
      scrollTop: formSectionOffset.top
    }, 1000, 'swing');
  }
}
