// components/add-color.js
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class AddColorComponent extends Component {
  @tracked name = '';
  @tracked value = '';

  @action
  addColor() {
    const color = { name: this.name, hex: this.value };
    this.args.onAdd(color); // Using closure action
    this.name = '';
    this.value = '';
  }

  @action
  handleInputChange(event) {
    const { name, value } = event.target;
    this[name] = value;
  }
}
