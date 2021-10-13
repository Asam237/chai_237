import React, {Component} from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import {COLOR} from '../../assets/themes/globals';
import {MyText} from '../../components/myText/MyText.component';

export class Others extends Component {
  render() {
    return (
      <SafeAreaView style={style.container}>
        <View>
          <MyText
            text="En cours de creation.."
            variant="normal"
            color={COLOR.white}
          />
        </View>
      </SafeAreaView>
    );
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.secondaryColor,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
