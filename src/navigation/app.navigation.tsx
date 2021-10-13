import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {ROUTES} from '../constant/routes';
import {StatusBar} from 'react-native';
import {COLOR} from '../assets/themes/globals';

const Stack = createStackNavigator();

const navigationRef = React.createRef();
export function navigate(name: string) {
  (navigationRef as any).current?.navigate(name);
}

export class AppNavigation extends Component {
  render() {
    return (
      <NavigationContainer ref={navigationRef}>
        <StatusBar backgroundColor={COLOR.secondaryColor} />
        <Stack.Navigator>
          <Stack.Screen
            name={ROUTES.welcome.name}
            component={ROUTES.welcome.component}
            options={{
              header: () => null,
            }}
          />
          <Stack.Screen
            name={ROUTES.login.name}
            component={ROUTES.login.component}
            options={{
              header: () => null,
            }}
          />
          <Stack.Screen
            name={ROUTES.signup.name}
            component={ROUTES.signup.component}
            options={{
              header: () => null,
            }}
          />
          <Stack.Screen
            name={ROUTES.mainNav.name}
            component={ROUTES.mainNav.component}
            options={{
              header: () => null,
            }}
          />
          <Stack.Screen
            name={ROUTES.detailCoffee.name}
            component={ROUTES.detailCoffee.component}
            options={{
              header: () => null,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
