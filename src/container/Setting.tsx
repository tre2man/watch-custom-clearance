import {Modal, Text, View} from 'react-native';
import {ThemeColor, ThemeState} from '../utils/ThemeState';
import {useRecoilState} from 'recoil';
import ThemeModeSettingView from '../view/SettingView';
import MainText from '../component/MainText';
import DetailPressable from '../component/DetailPressable';
import {useState} from 'react';

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
          setColor={setTheme}
          modalVisibleHandler={modalVisibleHandler}
        />
      </Modal>
    </View>
  );
};

export default Setting;
