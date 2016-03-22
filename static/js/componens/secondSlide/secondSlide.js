import Template from './secondSlide.html';
import './secondSlide.less';

export default SecondSlide

class SecondSlide {
  constructor(scrollController) {
    this.triggerDuration = '200%';
    this.scrollController = scrollController;
    this.appendDom();
    this.addSceneAnimation();
    this.addDomScrollEvent();
  }

  appendDom() {
    $('.scrollContent').append(Template);
  }

  addSceneAnimation() {
    new ScrollMagic.Scene(
      {
        triggerElement: ".secondSlide .slideTrigger",
        duration: this.triggerDuration,
        triggerHook: "onLeave"
      })
      .setClassToggle(".ribbon", "active")
      .addTo(this.scrollController);


    new ScrollMagic.Scene(
      {
        triggerElement: ".secondSlide .slideTrigger",
        duration: this.triggerDuration,
        triggerHook: "0.6"
      })
      .setClassToggle(".card", "active")
      .addTo(this.scrollController);


    new ScrollMagic.Scene(
      {
        triggerElement: ".secondSlide .slideTrigger",
        duration: this.triggerDuration,
        triggerHook: "0.4"
      })
      .setClassToggle(".front", "activeFront")
      .addTo(this.scrollController);


    new ScrollMagic.Scene(
      {
        triggerElement: ".secondSlide .slideTrigger",
        duration: this.triggerDuration,
        triggerHook: "0.4"
      })
      .setClassToggle(".back", "activeBack")
      .addTo(this.scrollController);


    new ScrollMagic.Scene(
      {
        triggerElement: ".secondSlide .slideTrigger",
        duration: this.triggerDuration,
        triggerHook: "0.4"
      })
      .setClassToggle('.rangeMove1', "active1")
      .addTo(this.scrollController);

    new ScrollMagic.Scene(
      {
        triggerElement: ".secondSlide .slideTrigger",
        duration: this.triggerDuration,
        triggerHook: "0.3"
      })
      .setClassToggle('.rangeMove2', "active2")
      .addTo(this.scrollController);

    new ScrollMagic.Scene(
      {
        triggerElement: ".secondSlide .slideTrigger",
        duration: this.triggerDuration,
        triggerHook: "0.2"
      })
      .setClassToggle('.rangeMove3', "active3")
      .addTo(this.scrollController);

    new ScrollMagic.Scene(
      {
        triggerElement: ".secondSlide .slideTrigger",
        duration: this.triggerDuration,
        triggerHook: "0.2"
      })
      .setClassToggle('.secondS1ContentText1', "active")
      .addTo(this.scrollController);

    new ScrollMagic.Scene(
      {
        triggerElement: ".secondSlide .slideTrigger",
        duration: this.triggerDuration,
        triggerHook: "0.2"
      })
      .setClassToggle('.secondS1ContentText2', "active1")
      .addTo(this.scrollController);

    new ScrollMagic.Scene(
      {
        triggerElement: ".secondSlide .slideTrigger",
        duration: this.triggerDuration,
        triggerHook: "0.6"
      })
      .setClassToggle('.secondS1ContentText1Mobil', "active")
      .addTo(this.scrollController);

    new ScrollMagic.Scene(
      {
        triggerElement: ".secondSlide .slideTrigger",
        duration: this.triggerDuration,
        triggerHook: "0.6"
      })
      .setClassToggle('.secondS1ContentText2Mobil', "active")
      .addTo(this.scrollController);
  }

  addDomScrollEvent(rangeAnimContent) {
    new ScrollMagic.Scene(
      {
        triggerElement: ".secondSlide .slideTrigger",
        duration: '100%',
        triggerHook: "onLeave"
      })
      .setTween(rangeAnimContent)
      .setPin(".secondSlide .Main")
      .addTo(this.scrollController);
  }
}

export default SecondSlide