import {SafeAreaView, Text, View} from 'react-native';
import {StatusBarView} from '../view';
import {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Button} from 'react-native';

const STORAE_KEY = 'Bookmarks';

const Bookmark = () => {
  const [input, setInput] = useState<string>('');
  const [data, setData] = useState<string[]>([]);

  const storeData = async (input: string) => {
    try {
      const value = await AsyncStorage.getItem(STORAE_KEY);
      const data = [];
      if (value !== null) {
        // 데이터가 존재하면
        const existData = JSON.parse(value);
        data.push(...existData);
      } else {
        // 데이터가 없으면
        data.push(input);
      }
      await AsyncStorage.setItem(STORAE_KEY, JSON.stringify(data));
    } catch (e) {
      // saving error
    }
  };

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem(STORAE_KEY);
      if (value !== null) {
        const data = JSON.parse(value) as string[];
        setData(data);
      }
    } catch (e) {
      // error reading value
    }
  };

  const resetData = async () => {
    try {
      await AsyncStorage.removeItem(STORAE_KEY);
      setData([]);
    } catch (e) {
      // error reading value
    }
  };

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <SafeAreaView>
      <View>
        <StatusBarView />
        <Text>Bookmark</Text>
        <Button title="저장버튼" onPress={() => storeData('123')} />
        <Button title="불러오는버튼" onPress={() => getData()} />
        <Button title="초기화" onPress={() => resetData()} />
      </View>
    </SafeAreaView>
  );
};

export default Bookmark;
