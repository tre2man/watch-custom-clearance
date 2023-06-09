import {Button, Modal, Pressable, Text, View} from 'react-native';
import {Dispatch, SetStateAction, useState} from 'react';
import {RadioButton} from 'react-native-paper';
import MainText from '../component/MainText';
import {ThemeColor} from '../utils/ThemeColorProvider';

interface Props {
  colorMode: ThemeColor;
  setColor: Dispatch<SetStateAction<ThemeColor>>;
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

const SettingView = ({colorMode, setColor}: Props) => {
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
              <MainText>{title}</MainText>
              <RadioButton
                value="first"
                status={colorMode === value ? 'checked' : 'unchecked'}
                onPress={() => setColor(value)}
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
