import {StatusBar} from 'react-native';
import {useRecoilState} from 'recoil';
import {ThemeColor, ThemeState} from '../utils/ThemeState';

const StatusBarView = () => {
  const [theme] = useRecoilState<ThemeColor>(ThemeState);

  return (
    <StatusBar
      backgroundColor={theme === 'light' ? 'black' : 'white'}
      barStyle={theme === 'light' ? 'dark-content' : 'light-content'}
    />
  );
};

export default StatusBarView;
