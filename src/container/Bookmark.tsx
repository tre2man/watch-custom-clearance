import {SafeAreaView, Text, View} from 'react-native';
import {BookmarkView, StatusBarView} from '../view';
import {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Button} from 'react-native';
import Clipboard from '@react-native-clipboard/clipboard';

const STORAGE_KEY = 'Bookmarks';

const Bookmark = () => {
  const [input, setInput] = useState<string>('');
  const [pccData, setPccData] = useState<string[]>([]);

  useEffect(() => {
    getData();
  }, []);

  const storeData = async (input: string) => {
    if (input === '') return;
    try {
      const value = await AsyncStorage.getItem(STORAGE_KEY);
      const newPccData = [];
      if (value !== null) {
        // 중복 제거 후 저장
        const existList = JSON.parse(value) as string[];
        const set = new Set([...existList, input]);
        const arr = Array.from(set);
        newPccData.push(...arr);
      } else {
        newPccData.push(input);
      }
      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(newPccData));
      // 데이터 업데이트
      getData();
    } catch (e) {
      // saving error
    }
  };

  const getData = async () => {
    try {
      const existData = await AsyncStorage.getItem(STORAGE_KEY);
      if (existData !== null) {
        const existList = JSON.parse(existData) as string[];
        setPccData(existList);
      }
    } catch (e) {
      // error reading value
    }
  };

  const deleteData = async (index: number) => {
    try {
      const existData = await AsyncStorage.getItem(STORAGE_KEY);
      if (existData !== null) {
        const existList = JSON.parse(existData) as string[];
        existList.splice(index, 1);
        await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(existList));
        setPccData(existList);
      }
    } catch (e) {
      // error reading value
    }
  };

  const resetData = async () => {
    try {
      await AsyncStorage.removeItem(STORAGE_KEY);
      setPccData([]);
    } catch (e) {
      // error reading value
    }
  };

  const copyToClipboard = (input: string) => {
    Clipboard.setString(input);
  };

  useEffect(() => {
    console.log(pccData);
  }, [pccData]);

  return (
    <>
      <BookmarkView
        input={input}
        setInput={setInput}
        data={pccData}
        storeData={storeData}
        deleteData={deleteData}
        copyToClipboard={copyToClipboard}
      />
    </>
  );
};

export default Bookmark;
