import {ToastPosition} from 'react-native-toast-message';

export const TOAST_OPTIONS = (type: string) => ({
  position: 'bottom' as ToastPosition,
  type,
  visibilityTime: 2000,
});
