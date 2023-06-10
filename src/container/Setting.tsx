import {Modal, View} from 'react-native';
import {STORAGE_KEY, ThemeColor, ThemeState} from '../utils/ThemeState';
import {useRecoilState} from 'recoil';
import {useState} from 'react';
import {DetailPressable, MainText} from '../component';
import ThemeModeSettingView from '../view/ThemeModeSettingView';
import AsyncStorage from '@react-native-async-storage/async-storage';

/**
 * 다크모드, 라이트모드 선택
 * @returns
 */
const Setting = () => {
  const [theme, setTheme] = useRecoilState<ThemeColor>(ThemeState);
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  const modalVisibleHandler = () => {
    setModalVisible(!modalVisible);
  };

  const setNewTheme = async (value: ThemeColor) => {
    AsyncStorage.setItem(STORAGE_KEY, value).then(() => {
      setTheme(value);
    });
  };

  return (
    <View
      style={{
        padding: '10%',
        display: 'flex',
        height: '100%',
        backgroundColor: theme === 'light' ? 'white' : '#121212',
      }}>
      <DetailPressable onPress={() => modalVisibleHandler()}>
        <MainText>화면 모드 선택</MainText>
      </DetailPressable>
      <Modal visible={modalVisible} animationType="slide">
        <ThemeModeSettingView
          colorMode={theme}
          setColor={setNewTheme}
          modalVisibleHandler={modalVisibleHandler}
        />
      </Modal>
    </View>
  );
};

export default Setting;
