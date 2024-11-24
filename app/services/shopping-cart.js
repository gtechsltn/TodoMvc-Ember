import { TrackedArray } from 'tracked-built-ins';
import Service from '@ember/service';

export default class ShoppingCartService extends Service {
  items = new TrackedArray([]);

  add(item) {
    this.items.push(item);
  }

  remove(item) {
    this.items.splice(this.items.indexOf(item), 1);
  }

  empty() {
    this.items.splice(0, this.items.length);
  }
}
