import {useEffect, useState} from 'react';
import GetData from './apis/GetData';
import {Text, View} from 'react-native';
import SearchBox from './container/SearchBox';
import ItemList from './container/ItemList';

const Main = ({navigation}: {navigation: any}) => {
  const [searchText, setSearchText] = useState<string>('');
  const [isLoading, data] = GetData(searchText);

  if (isLoading)
    return (
      <View>
        <Text>로딩중</Text>
      </View>
    );

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
