import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import {COLOR, SPACING} from '../../assets/themes/globals';

export class AuthLayout extends Component {
  render() {
    return <View style={styles.container}>{this.props.children}</View>;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: SPACING.small,
    backgroundColor: COLOR.secondaryColor,
  },
});
