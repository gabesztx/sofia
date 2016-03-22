import template from './thirdSlide.html';
import './thirdSlide.less';


class ThirdSlide {
  constructor(scrollController) {
    this.scrollController = scrollController;
    this.triggerDuration = '200%';
    this.appendDom();
    this.addSceneAnimation();
    this.addDomScrollEvent();
  }

  appendDom() {
    $('.scrollContent').append(template);
  }

  addSceneAnimation() {
    new ScrollMagic.Scene(
      {
        triggerElement: ".thirdSlide .slideTrigger",
        duration: this.triggerDuration,
        triggerHook: "onLeave"
      })
      .setClassToggle(".ribbon", "active")
      .addTo(this.scrollController);

    new ScrollMagic.Scene(
      {
        triggerElement: ".thirdSlide .slideTrigger",
        duration: this.triggerDuration,
        triggerHook: "0.5"
      })
      .setClassToggle(".thirds1Text", "active")
      .addTo(this.scrollController);

    new ScrollMagic.Scene(
      {
        triggerElement: ".thirdSlide .slideTrigger",
        duration: this.triggerDuration,
        triggerHook: "0.5"
      })
      .setClassToggle(".thirds2Text", "active")
      .addTo(this.scrollController);

    new ScrollMagic.Scene(
      {
        triggerElement: ".thirdSlide .slideTrigger",
        duration: this.triggerDuration,
        triggerHook: "0.1"
      })
      .setClassToggle(".landingBtnLast", "active")
      .addTo(this.scrollController);
  }

  addDomScrollEvent() {
    new ScrollMagic.Scene(
      {
        triggerElement: ".thirdSlide .slideTrigger",
        duration: '100%',
        triggerHook: "onLeave"
      })
      .setPin(".thirdSlide .Main")
      .on("leave enter", ((e)=> {
        if (e.progress === 0) {
          $('.scrollContent').removeClass('scrollContainerActive');
          $('.thirdSlide').removeClass('active');
          $('.thirdSlide .Main').removeClass('active');
          $('.womanWrapper').removeClass('womanWrapperActive');
        } else {
          $('.womanWrapper').addClass('womanWrapperActive');
          $('.thirdSlide .Main').addClass('active');
          $('.thirdSlide').addClass('active');
          $('.scrollContent').addClass('scrollContainerActive');
        }

      }))
      .addTo(this.scrollController);
  }
}

export default ThirdSlide

