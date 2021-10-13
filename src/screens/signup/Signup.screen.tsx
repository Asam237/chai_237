import {Formik} from 'formik';
import {inject, observer} from 'mobx-react';
import React, {Component} from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
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
export class Signup extends Component<MyProps> {
  toLogin = () => {
    this.props.navigation.navigate('login');
  };

  initialValue = {
    email: '',
    tel: '',
    firstname: '',
    surname: 'Test',
    password: '',
  };

  submit = async (value: any) => {
    await this.props.authStore!.signup(
      value.email,
      value.tel,
      value.firstname,
      value.surname,
      value.password,
    );
  };
  toLogin = () => {
    this.props.navigation.navigate('login');
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <AuthLayout>
          <Formik
            initialValues={this.initialValue}
            onSubmit={(values: any) => this.submit(values)}>
            {({handleChange, handleSubmit}) => (
              <ScrollView style={{flexGrow: 1}}>
                <Header
                  title={LANGUAGE.signup.title}
                  header={LANGUAGE.signup.login}
                />
                <View style={{marginTop: SPACING.xmedium}} />
                <View style={styles.container__parentInput}>
                  <View style={styles.container__input}>
                    <MyInput
                      onChangeText={handleChange('firstname')}
                      myText={LANGUAGE.signup.name}
                    />
                  </View>
                  <View
                    style={[
                      styles.container__input,
                      {marginTop: SPACING.xmedium},
                    ]}>
                    <MyInput
                      onChangeText={handleChange('email')}
                      myText={LANGUAGE.signup.mail}
                    />
                  </View>
                  <View
                    style={[
                      styles.container__input,
                      {marginTop: SPACING.xmedium},
                    ]}>
                    <MyInput
                      onChangeText={handleChange('password')}
                      myText={LANGUAGE.signup.password}
                      MySecureTextEntry={true}
                    />
                  </View>
                  <View
                    style={[
                      styles.container__input,
                      {marginTop: SPACING.xmedium},
                    ]}>
                    <MyInput
                      onChangeText={handleChange('tel')}
                      myText={LANGUAGE.signup.number}
                    />
                  </View>
                </View>
                <View style={{marginTop: SPACING.medium, height: 45}}>
                  <MyButton
                    text={LANGUAGE.signup.createAccount}
                    bgColor={COLOR.primaryColor}
                    onPress={() => {
                      handleSubmit();
                    }}
                  />
                </View>
                <View style={{marginTop: SPACING.small, height: 45}}>
                  <MyButton
                    text={LANGUAGE.signup.signin}
                    bgColor={COLOR.primaryColor}
                    onPress={this.toLogin}
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
  container__title: {
    alignItems: 'center',
    marginVertical: SPACING.small,
  },
  container__parentInput: {
    backgroundColor: COLOR.grayDark,
    borderRadius: SPACING.small,
    paddingVertical: SPACING.medium,
  },
  container__input: {
    marginHorizontal: SPACING.small,
    height: HEIGHT_CONTAINER,
  },
});
