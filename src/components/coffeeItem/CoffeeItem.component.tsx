import React, {Component} from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {COLOR, SPACING} from '../../assets/themes/globals';
import {MyText} from '../myText/MyText.component';

type MyProps = {
  data?: any;
  navigation?: any;
};

const IMAGE_SIZE = 150;

export class CoffeeItem extends Component<MyProps> {
  async componentDidMount() {
    console.log(
      'DATA:::::::',
      await this.props.data['produits'][0].medias[0].link,
    );
  }
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.container__image}
          // source={{uri: `${this.props.data['produits'][0].medias[0].link}`}
          source={{uri: `${this.props.data['produits'][0].medias[0].link}`}}
        />
        <MyText
          text={this.props.data.name}
          variant="header"
          color={COLOR.white}
        />
        <MyText
          text={this.props.data.subTitle}
          variant="normal"
          color={COLOR.white}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    backgroundColor: COLOR.grayDark,
    padding: SPACING.small,
    margin: SPACING.small,
    borderRadius: SPACING.small,
    justifyContent: 'center',
  },
  container__image: {
    height: IMAGE_SIZE,
    width: SPACING.full,
    borderRadius: SPACING.small,
    marginBottom: SPACING.small,
  },
});
