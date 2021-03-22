import Component from '@glimmer/component';
import { action } from '@ember/object';
import Sharer from 'ember-sharer/sharer-lib';

export default class SharerComponent extends Component {
  @action
  share({ target }) {
    return new Sharer(target).share();
  }
}
