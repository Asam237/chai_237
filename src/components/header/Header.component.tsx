import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import {COLOR, SPACING} from '../../assets/themes/globals';
import {MyText} from '../myText/MyText.component';

type MyProps = {
  title?: any;
  header?: any;
};

export class Header extends Component<MyProps> {
  render() {
    return (
      <View style={styles.container__title}>
        <MyText
          text={this.props.title}
          variant="title"
          color={COLOR.primaryColor}
        />
        <View style={{marginVertical: SPACING.small}} />
        <MyText text={this.props.header} variant="header" color={COLOR.white} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container__title: {
    alignItems: 'center',
    marginVertical: SPACING.small,
  },
});
