import {Pressable} from 'react-native';
import {useRecoilState} from 'recoil';
import {ThemeColor, ThemeState} from '../utils/ThemeState';

interface Props {
  children: JSX.Element;
  onPress?: () => void;
}

const DetailPressable = ({children, onPress}: Props) => {
  const [theme] = useRecoilState<ThemeColor>(ThemeState);

  return (
    <Pressable
      style={{
        borderRadius: 5,
        padding: 10,
        elevation: 2,
        height: 40,
        marginBottom: 10,
        borderColor: theme === 'light' ? 'black' : 'white',
        borderWidth: 0.5,
        alignItems: 'center',
      }}
      onPress={onPress}>
      {children}
    </Pressable>
  );
};

export default DetailPressable;
