import AsyncStorage from '@react-native-async-storage/async-storage';
import {createContext, useContext, useEffect, useState} from 'react';

export const ThemeContext = createContext<ThemeColor>('light');

export type ThemeColor = 'light' | 'dark';

export const useTheme = (): {theme: ThemeColor} => {
  const theme = useContext(ThemeContext);
  return {theme};
};

interface Props {
  children: JSX.Element;
  theme: ThemeColor;
}

export const ThemeColorProvider = ({children, theme}: Props) => {
  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};

/**
 * AsyncStorage에 테마값 저장
 * 만약 저장된 값이 없다면 기본값은 light
 * 테마 정보를 변경할때마다 AsyncStorage에 저장
 */
export const useThemeHook = () => {
  const [theme, setTheme] = useState<ThemeColor>('light');

  return {theme, setTheme};
};
