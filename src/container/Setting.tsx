import {useState} from 'react';
import SettingView from '../view/SettingView';
import {ColorMode} from '../context/DarkMode';
import {Text, View} from 'react-native';

const Setting = () => {
  const [colorMode, setColorMode] = useState<ColorMode>('light');

  // return <SettingView colorMode={colorMode} setColorMode={setColorMode} />;
  return (
    <View
      style={{
        margin: 10,
        display: 'flex',
        alignItems: 'center',
      }}>
      <Text>다크모드는 추후 출시예정입니다.</Text>
    </View>
  );
};

export default Setting;
