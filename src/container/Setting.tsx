import {useState} from 'react';
import SettingView from '../view/SettingView';
import {ColorMode} from '../context/DarkMode';

const Setting = () => {
  const [colorMode, setColorMode] = useState<ColorMode>('light');
  return <SettingView colorMode={colorMode} />;
};

export default Setting;
