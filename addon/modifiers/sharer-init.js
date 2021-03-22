import { modifier } from 'ember-modifier';
import Sharer from 'ember-sharer/sharer-lib';

export default modifier(function sharerInit(element/*, params, hash*/) {
  element.addEventListener('click', () => new Sharer(element).share());
});
