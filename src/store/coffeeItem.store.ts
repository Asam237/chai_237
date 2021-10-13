import {action, makeAutoObservable, observable} from 'mobx';
import {navigate} from '../navigation/app.navigation';
import {RootStore} from './root.store';
import {runInAction} from 'mobx';
import {CoffeeItemService} from '../services/coffeeItem.service';

export class CoffeeItemStore {
  rootStore: RootStore;
  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
    makeAutoObservable(this);
  }

  @action
  async getAllCoffeeItem() {
    console.log('DATA HERE STORE', CoffeeItemService.coffeeItem());
    try {
      return CoffeeItemService.coffeeItem();
    } catch (e: any) {
      console.error(e);
    }
  }
}
