import {SafeAreaView, StatusBar, View} from 'react-native';
import SearchBox from '../container/SearchBox';
import ItemList from '../container/ItemList';
import {Dispatch} from 'react';
import {ThemeColor, ThemeState} from '../utils/ThemeState';
import {useRecoilState} from 'recoil';
import StatusBarView from './StatusBarView';

interface Props {
  navigation: any;
  setSearchText: Dispatch<React.SetStateAction<string>>;
  isLoading: boolean;
  data: any;
}

const SearchView = (props: Props) => {
  const [theme] = useRecoilState<ThemeColor>(ThemeState);
  const {navigation, setSearchText, isLoading, data} = props;

  return (
    <SafeAreaView
      style={{
        backgroundColor: theme === 'light' ? 'white' : '#121212',
        height: '100%',
      }}>
      <StatusBarView />
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
    </SafeAreaView>
  );
};

export default SearchView;
