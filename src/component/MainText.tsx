import {StyleProp, Text, TextStyle, View} from 'react-native';
import {useEffect} from 'react';
import {selector, useRecoilState} from 'recoil';
import {ThemeColor, ThemeState} from '../utils/ThemeState';

interface Props {
  children: string;
  style?: StyleProp<TextStyle>;
}

const MainText = ({children, style}: Props) => {
  const [theme] = useRecoilState<ThemeColor>(ThemeState);

  return (
    <Text style={[{color: theme === 'light' ? 'black' : 'white'}, style]}>
      {children}
    </Text>
  );
};

export default MainText;
