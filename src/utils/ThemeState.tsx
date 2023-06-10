import AsyncStorage from '@react-native-async-storage/async-storage';
import {atom} from 'recoil';

export type ThemeColor = 'light' | 'dark';

export const STORAGE_KEY = 'THEME_STATE';

const getThemeState = async () => {
  try {
    const value = await AsyncStorage.getItem(STORAGE_KEY);
    if (value !== null) {
      return value;
    }
  } catch (e) {
    // error reading value
  }
};

export const ThemeState = atom<ThemeColor>({
  key: STORAGE_KEY,
  default: new Promise((resolve, reject) => {
    getThemeState()
      .then(value => {
        if (value) {
          resolve(value as ThemeColor);
        } else {
          resolve('light');
        }
      })
      .catch(e => {
        resolve('light');
      });
  }),
});
