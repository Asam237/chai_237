import axios from 'axios';
import {API} from '../constant/api';

export class CoffeeItemService {
  static coffeeItem = async () => {
    try {
      const result = await axios.get(API.coffeeItem.path);
      // console.log('DATA HERE', result.data);
      return result.data['data'];
    } catch (e: any) {
      console.error(e, 'error');
    }
  };
}
