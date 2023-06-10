import {atom} from 'recoil';

export type ThemeColor = 'light' | 'dark';

export const ThemeState = atom<ThemeColor>({
  key: 'ThemeState',
  default: 'light',
});
