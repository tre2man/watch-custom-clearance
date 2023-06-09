import {
  Button,
  Modal,
  Platform,
  Pressable,
  SafeAreaView,
  StatusBar,
  Text,
  View,
} from 'react-native';
import {Dispatch, SetStateAction, useState} from 'react';
import {RadioButton} from 'react-native-paper';
import MainText from '../component/MainText';
import {ThemeColor, ThemeState} from '../utils/ThemeState';
import {useRecoilState} from 'recoil';
import StatusBarView from './StatusBarView';

interface Props {
  colorMode: ThemeColor;
  setColor: Dispatch<SetStateAction<ThemeColor>>;
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
    <SafeAreaView>
      <StatusBarView isReverse/>
      <View
        style={{
          height: '100%',
          backgroundColor: theme === 'light' ? 'white' : '#121212',
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
    </SafeAreaView>
  );
};

export default ThemeModeSettingView;
