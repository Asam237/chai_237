import React, {Component} from 'react';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {FlatList, ScrollView} from 'react-native-gesture-handler';
import {COLOR, SPACING} from '../../assets/themes/globals';
import {MyText} from '../../components/myText/MyText.component';
import {LANGUAGE} from '../../constant/languages';
import {AuthLayout} from '../layout/Auth.layout';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faAlignJustify} from '@fortawesome/free-solid-svg-icons';
import imgLogo from '../../assets/imgs/pic.jpg';
import {Search} from '../../components/mySearch/MySearch.component';
import {COFFEE} from '../../services/Coffee.service';
import {CoffeeItem} from '../../components/coffeeItem/CoffeeItem.component';
import {inject, observer} from 'mobx-react';
import {CoffeeItemStore} from '../../store/coffeeItem.store';

const LEADING_SIZE = 45;

type MyProps = {
  navigation?: any;
  coffeeItem?: CoffeeItemStore;
};

@inject('coffeeItem')
@observer
export class Home extends Component<MyProps> {
  // toDetail = (value?: number) => {
  //   this.props.navigation.navigate('', this.state.data[value]);
  // };

  state = {
    myData: [],
    imageData: '',
  };

  async componentDidMount() {
    const data = await this.props.coffeeItem!.getAllCoffeeItem();
    this.setState({
      myData: data,
    });
    console.log('DATATATATA', this.state.myData[0].produits[0].medias[0].link);
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <AuthLayout>
          <ScrollView style={{flexGrow: 1}}>
            <View style={styles.container__header}>
              <View style={styles.conrtainer__leading}>
                <FontAwesomeIcon
                  icon={faAlignJustify}
                  size={SPACING.medium}
                  color={COLOR.gray}
                />
              </View>
              <MyText
                variant="title"
                text={LANGUAGE.signup.title}
                color={COLOR.primaryColor}
              />
              <View>
                <Image
                  source={imgLogo}
                  style={{
                    width: LEADING_SIZE,
                    height: LEADING_SIZE,
                    borderRadius: LEADING_SIZE / 2,
                  }}
                />
              </View>
            </View>
            <View style={{marginVertical: SPACING.xmedium}}>
              <MyText
                text={LANGUAGE.home.title}
                variant="title"
                color={COLOR.white}
              />
            </View>
            <View style={{height: 45}}>
              <Search textInput={LANGUAGE.home.searchInput} />
            </View>
            <View style={{marginTop: SPACING.xmedium}}>
              <FlatList
                // data={COFFEE}
                data={
                  (console.log('DAAAAAATTTTTTTTTTTA', this.state.myData),
                  this.state.myData)
                }
                numColumns={2}
                showsVerticalScrollIndicator={false}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({item, index}) => (
                  <TouchableOpacity
                    style={{width: '50%'}}
                    onPress={() => this.toDetail(index)}>
                    {/* <UserItem data={item} /> */}
                    <CoffeeItem data={item} />
                  </TouchableOpacity>
                )}
              />
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
  container__header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  conrtainer__leading: {
    width: LEADING_SIZE,
    height: LEADING_SIZE,
    backgroundColor: COLOR.grayDark,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: LEADING_SIZE / 2,
  },
});
