import Rails from '@rails/ujs';
import { Controller } from 'stimulus';

export default class extends Controller {
  static targets = ['form'];

  submit(event) {
    Rails.handleRemote.call(this.formTarget, event);
  }
}
