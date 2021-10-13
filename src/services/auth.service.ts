import axios from 'axios';
import {API} from '../constant/api';

let access_token = '';

const headers = {
  'Content-Type': 'application/json',
};

export class AuthService {
  static signin = async (email: string, password: string) => {
    const data = {
      email,
      password,
    };
    try {
      const result = await axios({
        url: API.signin.path,
        data,
        method: 'POST',
        headers,
      });
      return result;
    } catch (e: any) {
      console.log(e, 'error');
    }
  };

  static signup = async (
    email: string,
    tel: string,
    firstname: string,
    surname: string,
    password: string,
    fromApi: boolean,
  ) => {
    const data = {
      email,
      tel,
      firstname,
      surname,
      password,
      fromApi,
    };
    try {
      const result = await axios({
        url: API.signup.path,
        data,
        method: 'POST',
        headers,
      });
      return result;
    } catch (e: any) {
      console.log(e, 'error');
    }
  };
}
