import {useState} from 'react';
import {Text, View} from 'react-native';
import GetData from '../apis/GetData';
import ItemList from './ItemList';
import SearchBox from './SearchBox';

const Search = ({navigation}: {navigation: any}) => {
  const [searchText, setSearchText] = useState<string>('');
  const [isLoading, data] = GetData(searchText);

  if (isLoading)
    return (
      <View>
        <Text>로딩중</Text>
      </View>
    );

  return (
    <View>
      <View
        style={{
          margin: 10,
        }}>
        <SearchBox onSearch={setSearchText}></SearchBox>
        <View
          style={{
            marginTop: 10,
            height: '80%',
          }}>
          <ItemList isLoading={isLoading} data={data} navigation={navigation} />
        </View>
      </View>
    </View>
  );
};

export default Search;
