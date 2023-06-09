import {View} from 'react-native';
import SearchBox from '../container/SearchBox';
import ItemList from '../container/ItemList';
import {Dispatch} from 'react';

interface Props {
  navigation: any;
  setSearchText: Dispatch<React.SetStateAction<string>>;
  isLoading: boolean;
  data: any;
}

const SearchView = (props: Props) => {
  const {navigation, setSearchText, isLoading, data} = props;

  return (
    <View>
      <View
        style={{
          margin: 10,
        }}>
        <SearchBox onSearch={setSearchText} />
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

export default SearchView;
