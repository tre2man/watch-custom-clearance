import {Button, SafeAreaView, StatusBar, View} from 'react-native';
import {Dispatch, SetStateAction} from 'react';
import {RadioButton} from 'react-native-paper';
import {ThemeColor, ThemeState} from '../utils/ThemeState';
import {useRecoilState} from 'recoil';
import StatusBarView from './StatusBarView';
import {MainText} from '../component';

interface Props {
  colorMode: ThemeColor;
  setColor: (value: ThemeColor) => void;
  modalVisibleHandler: () => void;
}

const textList: {title: string; value: ThemeColor}[] = [
  {
    title: '라이트',
    value: 'light',
  },
  {
    title: '다크',
    value: 'dark',
  },
];

const ThemeModeSettingView = ({
  colorMode,
  setColor,
  modalVisibleHandler,
}: Props) => {
  const [theme] = useRecoilState<ThemeColor>(ThemeState);

  return (
    <View>
      <StatusBarView />
      <View
        style={{
          height: '100%',
          backgroundColor: theme === 'light' ? 'white' : '#121212',
          paddingTop: (StatusBar.currentHeight || 0) + 10,
        }}>
        {textList.map(({title, value}, index) => {
          return (
            <View
              key={index}
              style={{
                display: 'flex',
                flexDirection: 'row',
                margin: 10,
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <MainText>{title}</MainText>
              <RadioButton
                value="first"
                status={colorMode === value ? 'checked' : 'unchecked'}
                onPress={() => {
                  setColor(value);
                  modalVisibleHandler;
                }}
                color={theme === 'light' ? 'black' : 'white'}
              />
            </View>
          );
        })}
        <Button onPress={modalVisibleHandler} title="창 닫기" />
      </View>
    </View>
  );
};

export default ThemeModeSettingView;
