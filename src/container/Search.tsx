import {useState} from 'react';
import {SafeAreaView, View} from 'react-native';
import {MainText} from '../component';
import {SearchView} from '../view';
import {GetData} from '../apis';

const Search = ({navigation}: {navigation: any}) => {
  const [searchText, setSearchText] = useState<string>('');
  const [isLoading, data] = GetData(searchText);

  if (isLoading)
    return (
      <SafeAreaView>
        <MainText>로딩중</MainText>
      </SafeAreaView>
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
