import React, {Component} from 'react';
import {Image, SafeAreaView, StyleSheet, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {COLOR, SPACING} from '../../assets/themes/globals';
import {MyButton} from '../../components/myButton/MyButton.component';
import {MyText} from '../../components/myText/MyText.component';
import {LANGUAGE} from '../../constant/languages';
import {AuthLayout} from '../layout/Auth.layout';
import coffee from '../../assets/imgs/coffee.png';

const CONTAINER_IMG_SIZE = 40;

type MyProps = {
  navigation?: any;
};

export class Welcome extends Component<MyProps> {
  toLogin = () => {
    this.props.navigation.navigate('login');
  };

  toSingup = () => {
    this.props.navigation.navigate('signup');
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <AuthLayout>
          <ScrollView
            contentContainerStyle={{flexGrow: 1}}
            showsVerticalScrollIndicator={false}>
            <View style={[styles.container__one, {marginTop: SPACING.xlarge}]}>
              <Image
                source={coffee}
                style={{
                  height: 150,
                  width: 150,
                }}
              />
              <View style={{marginVertical: SPACING.small}} />
              <MyText
                color={COLOR.white}
                text={LANGUAGE.welcome.started}
                variant="title"
              />
              <View
                style={{
                  marginVertical: SPACING.medium,
                  marginHorizontal: SPACING.medium,
                }}>
                <MyText
                  color={COLOR.gray}
                  text={LANGUAGE.welcome.content}
                  variant="normal"
                  align="center"
                  spacing={SPACING.medium}
                />
              </View>
            </View>
            <View style={styles.container__two}>
              <View>
                <View style={styles.container__image}>
                  <MyButton
                    onPress={this.toSingup}
                    text={LANGUAGE.welcome.signin}
                    bgColor="#FF3608"
                  />
                </View>
                <View
                  style={[
                    styles.container__image,
                    {marginTop: SPACING.small + 5},
                  ]}>
                  <MyButton
                    onPress={this.toLogin}
                    text={LANGUAGE.welcome.login}
                    bgColor="#FF3608"
                  />
                </View>
              </View>
              <View style={{alignItems: 'center'}}>
                <MyText
                  color={COLOR.gray}
                  text="ASAM - 2021"
                  variant="normal"
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
  container__one: {
    flex: 1,
    alignItems: 'center',
  },
  container__two: {
    flex: 1,
    justifyContent: 'space-between',
  },
  container__image: {
    height: CONTAINER_IMG_SIZE,
  },
});
