import {View} from 'react-native';
import SettingView from '../view/SettingView';
import {ThemeColor, ThemeState} from '../utils/ThemeState';
import {useRecoilState} from 'recoil';

const Setting = () => {
  const [theme, setTheme] = useRecoilState<ThemeColor>(ThemeState);

  return (
    <View
      style={{
        padding: '10%',
        display: 'flex',
        alignItems: 'center',
        height: '100%',
        backgroundColor: theme === 'light' ? 'white' : '#121212',
      }}>
      <SettingView colorMode={theme} setColor={setTheme} />
    </View>
  );
};

export default Setting;
