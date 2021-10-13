import {inject, observer} from 'mobx-react';
import React, {Component} from 'react';
import {
  SafeAreaView,
  Image,
  ScrollView,
  StyleSheet,
  View,
  ImageBackground,
} from 'react-native';
import {Text} from 'react-native-svg';
import {COLOR, SPACING} from '../../assets/themes/globals';
import {MyText} from '../../components/myText/MyText.component';
import {LANGUAGE} from '../../constant/languages';
import {CoffeeItemStore} from '../../store/coffeeItem.store';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons';
import {AuthLayout} from '../layout/Auth.layout';
import {TouchableOpacity} from 'react-native-gesture-handler';

type MyProps = {
  route?: any;
  coffeeItem?: CoffeeItemStore;
  navigation?: any;
};

const PICTURE_HEIGHT = 200;

@inject('coffeeItem')
@observer
export class DetailCoffee extends Component<MyProps> {
  toHome = () => {
    this.props.navigation.navigate('mainNav');
  };

  state = {
    data: [],
  };
  async componentDidMount() {
    console.log(
      'Les details::::::::::::::::::::::::::::::::::::::::::::::',
      await this.props.route.params.produits[0].description,
    );
    this.setState({
      data: await this.props.coffeeItem!.getAllCoffeeItem(),
    });
  }

  render() {
    console.log('LES ROUTES:::::', this.props.route.params.description);
    return (
      <SafeAreaView style={styles.container}>
        <AuthLayout>
          <ScrollView
            contentContainerStyle={{flexGrow: 1}}
            showsVerticalScrollIndicator={false}>
            <ImageBackground
              source={{
                uri: `${this.props.route.params.produits[0].medias[0].link}`,
              }}
              style={styles.container__image}>
              <View
                style={{
                  backgroundColor: COLOR.grayMedium,
                  width: SPACING.large,
                  height: SPACING.large,
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginTop: SPACING.small,
                  marginLeft: SPACING.small,
                  borderRadius: SPACING.small,
                }}>
                <TouchableOpacity onPress={this.toHome}>
                  <FontAwesomeIcon color={COLOR.gray} icon={faArrowLeft} />
                </TouchableOpacity>
              </View>
            </ImageBackground>
            <View style={{marginVertical: SPACING.small}} />
            <MyText variant="header" text="Description" color={COLOR.gray} />
            <View style={{marginVertical: SPACING.small}} />
            <MyText
              variant="normal"
              text={this.props.route.params.produits[0].description}
              color={COLOR.gray}
            />
            <View style={{marginVertical: SPACING.small}} />
            <View style={styles.container__detailRow}>
              <View style={styles.container__detailRow__text}>
                <MyText
                  variant="normal"
                  text={LANGUAGE.detail.price}
                  color={COLOR.primaryColor}
                />
                <MyText
                  variant="header"
                  text={
                    `${this.props.route.params.produits[0].price}` + ' FCFA'
                  }
                  color={COLOR.gray}
                />
              </View>
              <View style={styles.container__detailRow__btn}>
                <MyText
                  variant="normal"
                  color={COLOR.white}
                  text={LANGUAGE.detail.buyNow}
                />
              </View>
            </View>
          </ScrollView>
        </AuthLayout>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  container__image: {
    width: SPACING.full,
    height: PICTURE_HEIGHT,
    borderRadius: SPACING.small,
  },
  container__bg: {},
  container__detailRow: {
    height: PICTURE_HEIGHT / 4,
    flexDirection: 'row',
  },
  container__detailRow__text: {
    flex: 1.5,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container__detailRow__btn: {
    flex: 3,
    backgroundColor: COLOR.primaryColor,
    marginLeft: SPACING.small,
    borderRadius: SPACING.medium,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
