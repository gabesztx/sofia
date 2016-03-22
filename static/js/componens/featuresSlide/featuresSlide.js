import template from './featuresSlide.html';
import './featuresSlide.less';

class FeaturesSlide {
  constructor(scrollController) {
    this.scrollController = scrollController;
    this.appendDom();
  }
  appendDom() {
    $('.scrollContent').append(template);
  }
}
export default FeaturesSlide

