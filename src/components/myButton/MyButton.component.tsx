import React, {Component} from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {COLOR, SPACING} from '../../assets/themes/globals';
import {MyText} from '../myText/MyText.component';

type MyProps = {
  text: String;
  bgColor: any;
  onPress?: any;
};

export class MyButton extends Component<MyProps> {
  render() {
    const {text, bgColor} = this.props;
    return (
      <TouchableOpacity
        onPress={this.props.onPress}
        style={[
          styles.container,
          {backgroundColor: bgColor, padding: SPACING.small},
        ]}>
        <MyText variant="normal" text={text} color={COLOR.white} />
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: SPACING.full,
    height: SPACING.full,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: SPACING.medium,
  },
});
