import {action, makeAutoObservable, observable} from 'mobx';
import {navigate} from '../navigation/app.navigation';
import {RootStore} from './root.store';
import {runInAction} from 'mobx';
import {AuthService} from '../services/auth.service';
import {TOAST_OPTIONS} from '../helpers/toatOptions';
import {errorStatus} from '../helpers/errorStatus';
import {AppEventEmitter, AppEvents} from '../helpers/eventEmitter';
import Toast from 'react-native-toast-message';

export class AuthStore {
  @observable email: string = '';
  @observable tel: string = '';
  @observable firstname: string = '';
  @observable surname: string = '';
  @observable password: string = '';
  @observable fromApi: boolean = true;

  rootStore: RootStore;
  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
    makeAutoObservable(this);
  }

  @action
  async signup(
    email: string,
    tel: string,
    firstname: string,
    surname: string,
    password: string,
  ) {
    const {data}: any = await AuthService.signup(
      email,
      tel,
      firstname,
      surname,
      password,
      this.fromApi,
    );
    if (!data) {
      Toast.show({
        text1: 'message',
        ...TOAST_OPTIONS('error'),
      });
    } else {
      this.email = data.email;
      this.tel = data.tel;
      this.firstname = data.firstname;
      this.password = data.password;
      this.surname = data.surname;
      return navigate('login');
    }
  }

  @action
  async signin(email: string, password: string) {
    console.log('Hello signi store');
    AppEventEmitter.emit(AppEvents.OverlaySpinner, true);
    const {data}: any = await AuthService.signin(email, password);
    this.email = data.email;
    this.password = data.password;
    console.log('Mes datas : ', data);
    AppEventEmitter.emit(AppEvents.OverlaySpinner, false);
    TOAST_OPTIONS('success');
    return navigate('mainNav');
  }
}
