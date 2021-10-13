import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import {COLOR, SPACING} from '../../assets/themes/globals';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons';

type MyProps = {
  textInput?: any;
};

export class Search extends Component<MyProps> {
  render() {
    return (
      <View style={styles.container}>
        <FontAwesomeIcon
          size={SPACING.medium}
          color={COLOR.gray}
          icon={faSearch}
        />
        <TextInput
          style={{paddingLeft: SPACING.small}}
          placeholderTextColor={COLOR.gray}
          placeholder={this.props.textInput}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: SPACING.full,
    width: SPACING.full,
    backgroundColor: COLOR.grayDark,
    flexDirection: 'row',
    borderRadius: SPACING.small,
    alignItems: 'center',
    paddingHorizontal: SPACING.xmedium,
  },
});
