import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, click } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import Sharer from 'ember-sharer/sharer-lib';

module('Integration | Modifier | sharer-init', function (hooks) {
  setupRenderingTest(hooks);

  // Replace this with your real tests.
  test('it renders', async function (assert) {
    assert.expect(2);
    Sharer.prototype.share = function () {
      assert.equal(
        this.elem.getAttribute('data-sharer'),
        'facebook',
        'data-sharer should be facebook'
      );
      assert.ok(true, 'call share.prototype.share');
    };

    await render(hbs`<div
      data-sharer="facebook" 
      class="test"
      data-hashtag="ember"
      data-quote="sharerjs from ember-modifier"
      data-url="https://emberobserver.com/"
      {{sharer-init}}
  >
    Hello
  </div>
`);

    await click('.test');
  });
});
