import {useState} from 'react';
import {View} from 'react-native';
import GetData from '../apis/GetData';
import MainText from '../component/MainText';
import SearchView from '../view/SearchView';

const Search = ({navigation}: {navigation: any}) => {
  const [searchText, setSearchText] = useState<string>('');
  const [isLoading, data] = GetData(searchText);

  if (isLoading)
    return (
      <View>
        <MainText>로딩중</MainText>
      </View>
    );

  return (
    <SearchView
      navigation={navigation}
      setSearchText={setSearchText}
      isLoading={isLoading}
      data={data}
    />
  );
};

export default Search;
