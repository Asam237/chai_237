import React, {Component} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faHome} from '@fortawesome/free-solid-svg-icons';
import {faShoppingBag} from '@fortawesome/free-solid-svg-icons';
import {faHeart} from '@fortawesome/free-solid-svg-icons';
import {faBell} from '@fortawesome/free-solid-svg-icons';
import {COLOR} from '../assets/themes/globals';
import {Others} from '../screens/others/Others.screen';
import {Home} from '../screens/home/Home.screen';

const Tab = createBottomTabNavigator();

export class MainNavigation extends Component {
  render() {
    return (
      <Tab.Navigator
        screenOptions={{
          tabBarShowLabel: false,
          tabBarStyle: {
            backgroundColor: COLOR.grayDark,
          },
        }}>
        <Tab.Screen
          options={{
            header: () => null,
            tabBarIcon: ({focused}) => {
              return focused ? (
                <FontAwesomeIcon
                  icon={faHome}
                  size={25}
                  style={{color: COLOR.primaryColor}}
                />
              ) : (
                <FontAwesomeIcon
                  icon={faHome}
                  size={25}
                  style={{color: COLOR.gray}}
                />
              );
            },
          }}
          name="1"
          component={Home}
        />
        <Tab.Screen
          options={{
            header: () => null,
            tabBarIcon: ({focused}) => {
              return focused ? (
                <FontAwesomeIcon
                  icon={faShoppingBag}
                  size={25}
                  style={{color: COLOR.primaryColor}}
                />
              ) : (
                <FontAwesomeIcon
                  icon={faShoppingBag}
                  size={25}
                  style={{color: COLOR.gray}}
                />
              );
            },
          }}
          name="2"
          component={Others}
        />
        <Tab.Screen
          options={{
            header: () => null,
            tabBarIcon: ({focused}) => {
              return focused ? (
                <FontAwesomeIcon
                  icon={faHeart}
                  size={25}
                  style={{color: COLOR.primaryColor}}
                />
              ) : (
                <FontAwesomeIcon
                  icon={faHeart}
                  size={25}
                  style={{color: COLOR.gray}}
                />
              );
            },
          }}
          name="3"
          component={Others}
        />
        <Tab.Screen
          options={{
            header: () => null,
            tabBarIcon: ({focused}) => {
              return focused ? (
                <FontAwesomeIcon
                  icon={faBell}
                  size={25}
                  style={{color: COLOR.primaryColor}}
                />
              ) : (
                <FontAwesomeIcon
                  icon={faBell}
                  size={25}
                  style={{color: COLOR.gray}}
                />
              );
            },
          }}
          name="4"
          component={Others}
        />
      </Tab.Navigator>
    );
  }
}
