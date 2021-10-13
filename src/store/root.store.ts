import {observable} from 'mobx';
import {AuthStore} from './auth.store';
import {CoffeeItemStore} from './coffeeItem.store';

export class RootStore {
  @observable coffeeItem: CoffeeItemStore;
  @observable authStore: AuthStore;

  constructor() {
    this.coffeeItem = new CoffeeItemStore(this);
    this.authStore = new AuthStore(this);
  }
}

export const appRootStore = new RootStore();
