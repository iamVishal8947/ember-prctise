// components/application.js
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class ApplicationComponent extends Component {
  @tracked colors = []; // Initial empty array of colors
  @tracked viewingMode = 'hex'; // Default viewing mode is Hex

  @action
  addColor(color) {
    this.colors = [...this.colors, color];
  }

  @action
  removeColor(color) {
    this.colors = this.colors.filter(c => c !== color);
  }
}
