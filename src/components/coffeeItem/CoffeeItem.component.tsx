import React, {Component} from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {COLOR, SPACING} from '../../assets/themes/globals';
import {MyText} from '../myText/MyText.component';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faPlus} from '@fortawesome/free-solid-svg-icons';

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
          text={this.props.data['produits'][0].description}
          variant="normal"
          color={COLOR.white}
          numberOfLine={1}
        />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: SPACING.small,
          }}>
          <View>
            <MyText
              variant="normal"
              color={COLOR.white}
              text={`${this.props.data['produits'][0].price} FCFA`}
            />
          </View>
          <View
            style={{
              backgroundColor: COLOR.primaryColor,
              height: SPACING.medium,
              width: SPACING.medium,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 2,
            }}>
            <FontAwesomeIcon size={12} color={COLOR.white} icon={faPlus} />
          </View>
        </View>
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
