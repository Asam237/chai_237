import React, {Component} from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import {TextInputProps} from 'react-native';
import {COLOR, SPACING} from '../../assets/themes/globals';

interface MyProps extends TextInputProps {
  myText?: any;
  myKeyboardType?: any;
}

export class MyInput extends Component<MyProps> {
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          keyboardType={this.props.myKeyboardType}
          placeholder={this.props.myText}
          onChangeText={(e: any) => this.props.onChangeText!(e)}
          style={styles.container__input}
          placeholderTextColor={COLOR.gray}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: SPACING.full,
    height: SPACING.full,
    borderRadius: SPACING.medium,
  },
  container__input: {
    backgroundColor: '#212428',
    color: COLOR.white,
  },
});
