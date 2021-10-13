import Toast from 'react-native-toast-message';
import {AppEventEmitter, AppEvents} from './eventEmitter';
import {TOAST_OPTIONS} from './toatOptions';

export const errorStatus = (data: any) => {
  if (data.status === 401) {
    Toast.show({
      text1: "Les informations d'authentification sont invalides",
      ...TOAST_OPTIONS('error'),
    });
    AppEventEmitter.emit(AppEvents.OverlaySpinner, false);
  }
  if (data.status === 400) {
    Toast.show({
      text1: 'Syntaxe invalide',
      ...TOAST_OPTIONS('error'),
    });
    AppEventEmitter.emit(AppEvents.OverlaySpinner, false);
  }
  if (data.status === 404) {
    Toast.show({
      text1: 'Le serveur ne peut pas trouver la ressource demandée',
      ...TOAST_OPTIONS('error'),
    });
    AppEventEmitter.emit(AppEvents.OverlaySpinner, false);
  }
  if (data.status === 500) {
    Toast.show({
      text1: 'Le serveur a rencontré un problème inattendu',
      ...TOAST_OPTIONS('error'),
    });
    AppEventEmitter.emit(AppEvents.OverlaySpinner, false);
  }
};
