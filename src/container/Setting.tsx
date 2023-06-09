import {View} from 'react-native';
import {RadioButton} from 'react-native-paper';
import SettingView from '../view/SettingView';
import {
  ThemeColor,
  ThemeContext,
  useTheme,
  useThemeHook,
} from '../utils/ThemeColorProvider';
import {useEffect} from 'react';

const Setting = () => {
  const {theme, setTheme} = useThemeHook();

  useEffect(() => {
    console.log('theme', theme);
  }, [theme]);

  return (
    <View
      style={{
        padding: '10%',
        display: 'flex',
        alignItems: 'center',
        height: '100%',
        backgroundColor: theme === 'light' ? 'white' : '#121212',
      }}>
      <ThemeContext.Provider value={theme}>
        <SettingView colorMode={theme} setColor={setTheme} />
      </ThemeContext.Provider>
    </View>
  );
};

export default Setting;
