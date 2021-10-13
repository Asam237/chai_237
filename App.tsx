import React, {Component} from 'react';
import {AppNavigation} from './src/navigation/app.navigation';
import {Provider} from 'mobx-react';
import {appRootStore} from './src/store/root.store';

import {AppEventEmitter, AppEvents} from './src/helpers/eventEmitter';
import Toast from 'react-native-toast-message';
import Spinner from 'react-native-loading-spinner-overlay';
import {COLOR} from './src/assets/themes/globals';

export class App extends Component {
  overlaySpinnerUnsubscribe: any = null;
  state = {
    spinnerVisible: false,
  };
  componentDidMount() {
    this.overlaySpinnerUnsubscribe = AppEventEmitter.subscribe(
      AppEvents.OverlaySpinner,
      (spinnerVisible: boolean) => {
        this.setState({spinnerVisible});
      },
    );
  }
  render() {
    return (
      <Provider {...appRootStore}>
        <Spinner
          visible={this.state.spinnerVisible}
          overlayColor={COLOR.secondaryColor}
        />
        <AppNavigation />
        <Toast ref={ref => Toast.setRef(ref)} />
      </Provider>
    );
  }
}
