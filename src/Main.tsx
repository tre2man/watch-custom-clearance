import {useEffect, useState} from 'react';
import GetData from './container/GetData';
import {View} from 'react-native';
import SearchBox from './view/SearchBox';
import ItemList from './view/ItemList';

const Main = ({navigation}: {navigation: any}) => {
  const [searchText, setSearchText] = useState<string>('');
  const [isLoading, data] = GetData(searchText);

  useEffect(() => {
    console.log({searchText});
  }, [searchText]);

  return (
    <View
      style={{
        margin: 10,
      }}>
      <SearchBox onSearch={setSearchText}></SearchBox>
      <View
        style={{
          marginTop: 10,
        }}>
        <ItemList
          isLoading={isLoading}
          data={data}
          navigation={navigation}></ItemList>
      </View>
    </View>
  );
};

export default Main;
