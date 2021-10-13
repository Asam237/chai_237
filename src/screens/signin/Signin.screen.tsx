import {Formik} from 'formik';
import {inject, observer} from 'mobx-react';
import React, {Component} from 'react';
import {SafeAreaView, ScrollView, StyleSheet, View} from 'react-native';
import {COLOR, SPACING} from '../../assets/themes/globals';
import {Header} from '../../components/header/Header.component';
import {MyButton} from '../../components/myButton/MyButton.component';
import {MyInput} from '../../components/myInput/MyInput.component';
import {LANGUAGE} from '../../constant/languages';
import {AuthStore} from '../../store/auth.store';
import {AuthLayout} from '../layout/Auth.layout';

const HEIGHT_CONTAINER = 45;
type MyProps = {
  navigation?: any;
  authStore?: AuthStore;
};

@inject('authStore')
@observer
export class Signin extends Component<MyProps> {
  initialeValues = {
    email: '',
    tel: '',
  };

  submit = async (value: any) => {
    console.log(
      'Lire ceci',
      await this.props.authStore!.signin(value.email, value.password),
    );
    await this.props.authStore!.signin(value.email, value.password);
  };

  toSignup = () => {
    this.props.navigation.navigate('signup');
  };

  toMain = () => {
    this.props.navigation.navigate('mainNav');
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <AuthLayout>
          <Formik
            initialValues={this.initialeValues}
            onSubmit={(values: any) => this.submit(values)}>
            {({handleChange, handleSubmit}) => (
              <ScrollView style={{flexGrow: 1}}>
                <Header
                  title={LANGUAGE.signup.title}
                  header={LANGUAGE.login.login}
                />
                <View style={{marginTop: SPACING.small}} />
                <View style={styles.container__parentInput}>
                  <View style={styles.container__input}>
                    <MyInput
                      onChangeText={handleChange('email')}
                      myText={LANGUAGE.login.mail}
                    />
                  </View>
                  <View
                    style={[
                      styles.container__input,
                      {marginTop: SPACING.xmedium},
                    ]}>
                    <MyInput
                      onChangeText={handleChange('password')}
                      myText={LANGUAGE.login.password}
                      MySecureTextEntry={true}
                    />
                  </View>
                </View>
                <View style={{marginTop: SPACING.medium, height: 45}}>
                  <MyButton
                    text={LANGUAGE.signup.signin}
                    bgColor={COLOR.primaryColor}
                    onPress={() => {
                      handleSubmit();
                    }}
                  />
                </View>
                <View style={{marginTop: SPACING.small, height: 45}}>
                  <MyButton
                    onPress={this.toSignup}
                    text={LANGUAGE.signup.createAccount}
                    bgColor={COLOR.primaryColor}
                  />
                </View>
              </ScrollView>
            )}
          </Formik>
        </AuthLayout>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  container__input: {
    marginHorizontal: SPACING.small,
    height: HEIGHT_CONTAINER,
  },
  container__parentInput: {
    backgroundColor: COLOR.grayDark,
    borderRadius: SPACING.small,
    paddingVertical: SPACING.medium,
  },
});
