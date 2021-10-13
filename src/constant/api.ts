const BASE_URL = 'https://dashboard.mystore.lamater.net/api/2021-05';

interface IApiItem {
  path: any;
  type: 'GET' | 'POST';
  params?: any[];
}

interface IApi {
  coffeeItem: IApiItem;
  signup: IApiItem;
  signin: IApiItem;
}

export const API: IApi = {
  coffeeItem: {
    type: 'GET',
    path: `${BASE_URL}/companies/430/collections`,
  },
  signin: {
    type: 'POST',
    path: `${BASE_URL}/clients/login`,
  },
  signup: {
    type: 'POST',
    path: `${BASE_URL}/clients/register`,
  },
};
