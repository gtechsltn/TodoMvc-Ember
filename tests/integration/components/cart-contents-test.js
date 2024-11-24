import { module, test } from 'qunit';
import { setupRenderingTest } from 'todomvc/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | cart-contents', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<CartContents />`);

    assert.dom().hasText('');

    // Template block usage:
    await render(hbs`
      <CartContents>
        template block text
      </CartContents>
    `);

    assert.dom().hasText('template block text');
  });
});
