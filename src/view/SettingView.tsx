import {Button, Modal, Pressable, Text, View} from 'react-native';
import {ColorMode} from '../context/DarkMode';
import {Dispatch, SetStateAction, useState} from 'react';
import {RadioButton} from 'react-native-paper';

interface Props {
  colorMode: ColorMode;
  setColorMode: Dispatch<SetStateAction<ColorMode>>;
}

const textList: {title: string; value: ColorMode}[] = [
  {
    title: '시스템 기본값',
    value: 'default',
  },
  {
    title: '라이트',
    value: 'light',
  },
  {
    title: '다크',
    value: 'dark',
  },
];

const SettingView = ({colorMode, setColorMode}: Props) => {
  return (
    <View style={{margin: 10}}>
      <View>
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
              <Text>{title}</Text>
              <RadioButton
                value="first"
                status={colorMode === value ? 'checked' : 'unchecked'}
                onPress={() => setColorMode(value)}
                color="black"
              />
            </View>
          );
        })}
      </View>
    </View>
  );
};

export default SettingView;
