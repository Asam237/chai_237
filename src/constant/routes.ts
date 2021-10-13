import {MainNavigation} from '../navigation/main.navigation';
import {DetailCoffee} from '../screens/detailCoffee/DetailCoffee.screen';
import {Home} from '../screens/home/Home.screen';
import {Others} from '../screens/others/Others.screen';
import {Signin} from '../screens/signin/Signin.screen';
import {Signup} from '../screens/signup/Signup.screen';
import {Welcome} from '../screens/welcome/Welcome.screen';

interface IRouteItem {
  name: any;
  component: any;
}

interface IRoutes {
  welcome: IRouteItem;
  login: IRouteItem;
  signup: IRouteItem;
  mainNav: IRouteItem;
  others: IRouteItem;
  home: IRouteItem;
  detailCoffee: IRouteItem;
}

export const ROUTES: IRoutes = {
  welcome: {
    name: 'welcome',
    component: Welcome,
  },
  login: {
    name: 'login',
    component: Signin,
  },
  signup: {
    name: 'signup',
    component: Signup,
  },
  mainNav: {
    name: 'mainNav',
    component: MainNavigation,
  },
  home: {
    name: 'home',
    component: Home,
  },
  others: {
    name: 'others',
    component: Others,
  },
  detailCoffee: {
    name: 'detailCoffee',
    component: DetailCoffee,
  },
};
