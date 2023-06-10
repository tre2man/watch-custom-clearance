import {
  Alert,
  Button,
  Pressable,
  SafeAreaView,
  TextInput,
  View,
} from 'react-native';
import StatusBarView from './StatusBarView';
import {ThemeColor, ThemeState} from '../utils/ThemeState';
import {useRecoilState} from 'recoil';
import {DetailPressable, MainText, Table} from '../component';
import SaveLogo from '../Images/save.svg';
import Clipboard from '@react-native-clipboard/clipboard';

interface Props {
  data: string[];
  input: string;
  setInput: (input: string) => void;
  storeData: (input: string) => void;
  deleteData: (index: number) => void;
  copyToClipboard: (input: string) => void;
}

const BookmarkView = (props: Props) => {
  const [theme] = useRecoilState<ThemeColor>(ThemeState);
  const {data, input, setInput, storeData, deleteData, copyToClipboard} = props;

  const DataListView = (
    <>
      {data.map((value, index) => (
        <View
          key={index}
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            flexDirection: 'row',
            marginTop: 5,
            marginBottom: 5,
            backgroundColor: theme === 'light' ? 'white' : '#121212',
            borderRadius: 8,
            padding: 5,
            borderWidth: 0.3,
            borderColor: 'gray',
            alignItems: 'center',
            height: 50,
          }}>
          <MainText style={{marginLeft: 10}}>{value}</MainText>
          <View
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Pressable onPress={() => copyToClipboard(value)}>
              <MainText>클립보드에 복사</MainText>
            </Pressable>
            <View style={{width: 15}} />
            <Pressable onPress={() => deleteData(index)}>
              <MainText>삭제</MainText>
            </Pressable>
            <View style={{width: 5}} />
          </View>
        </View>
      ))}
    </>
  );

  return (
    <SafeAreaView
      style={{
        backgroundColor: theme === 'light' ? 'white' : '#121212',
        height: '100%',
      }}>
      <StatusBarView />
      <View style={{padding: 10}}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            marginTop: 10,
            marginBottom: 10,
            alignItems: 'center',
            backgroundColor: theme === 'light' ? 'white' : 'gray',
            borderRadius: 8,
            padding: 5,
            borderWidth: 0.3,
            borderColor: 'gray',
          }}>
          <View style={{flex: 10}}>
            <TextInput
              onChangeText={setInput}
              value={input}
              placeholder=" 저장할 통관번호를 입력하세요"
              placeholderTextColor={theme === 'light' ? '#121212' : 'white'}
              style={{
                color: 'black',
              }}
            />
          </View>
          <View style={{flex: 1}}>
            <Pressable
              onPress={() => {
                storeData(input);
                setInput('');
              }}>
              <SaveLogo
                width={20}
                height={20}
                fill={theme === 'light' ? 'black' : 'white'}
              />
            </Pressable>
          </View>
        </View>
      </View>
      <Table>{DataListView}</Table>
    </SafeAreaView>
  );
};

export default BookmarkView;
