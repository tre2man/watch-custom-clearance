import {StyleProp, Text, TextStyle, View} from 'react-native';
import {useTheme} from '../utils/ThemeColorProvider';

interface Props {
  children: string;
  style?: StyleProp<TextStyle>;
}

const MainText = ({children, style}: Props) => {
  const {theme} = useTheme();

  return (
    <Text style={[{color: theme === 'light' ? 'black' : 'white'}, style]}>
      {children}
    </Text>
  );
};

export default MainText;
