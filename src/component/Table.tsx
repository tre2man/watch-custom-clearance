import {ScrollView, View} from 'react-native';
import dayjs from 'dayjs';
import he from 'he';
import MainText from './MainText';
import {useRecoilState} from 'recoil';
import {ThemeColor, ThemeState} from '../utils/ThemeState';
import {Children} from 'react';

interface Props {
  children: JSX.Element;
}

/**
 * children : 테이블의 내용
 */
const Table = ({children}: Props) => {
  const [theme] = useRecoilState<ThemeColor>(ThemeState);

  return (
    <View
      style={{
        backgroundColor: theme === 'light' ? 'white' : '#121212',
      }}>
      <ScrollView>
        <View
          style={{
            backgroundColor: theme === 'light' ? 'white' : '#121212',
          }}>
          <View style={{margin: 10}}>{children}</View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Table;
