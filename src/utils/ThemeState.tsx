import AsyncStorage from '@react-native-async-storage/async-storage';
import {atom} from 'recoil';

export type ThemeColor = 'light' | 'dark';

export const STORAGE_KEY = 'THEME_STATE';

export const ThemeState = atom<ThemeColor>({
  key: STORAGE_KEY,
  default: 'light',
});
