import {Text, View} from 'react-native';
import {ColorMode} from '../context/DarkMode';

interface Props {
  colorMode: ColorMode;
}

const SettingView = ({colorMode}: Props) => {
  return (
    <View>
      <Text>SettingView</Text>
    </View>
  );
};

export default SettingView;
