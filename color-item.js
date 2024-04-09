// components/color-item.js
import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class ColorItemComponent extends Component {
  get formattedColor() {
    const { color, viewingMode } = this.args;
    if (viewingMode === 'hex') {
      return color.hex || color.rgbToHex();
    } else {
      return color.rgb || color.hexToRgb();
    }
  }

  @action
  copyToClipboard(text) {
    navigator.clipboard.writeText(text);
  }
}
