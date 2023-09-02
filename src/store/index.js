import {makeAutoObservable} from 'mobx';

import BusinessStore from './BusinessStore'
import UIStore from './UIStore'

class RootStore {
    ui = new UIStore();
    business = new BusinessStore();

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
  }
}

export default new RootStore();
