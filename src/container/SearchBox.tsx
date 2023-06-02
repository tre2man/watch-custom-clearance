import {useState} from 'react';
import {Pressable, TextInput, View} from 'react-native';
import SearchLogo from '../Images/search.svg';

const SearchBox = ({onSearch}: {onSearch: (input: string) => void}) => {
  const [input, setInput] = useState<string>('');

  // 입력받은 값 외부로 넘기기 onsearch
  const returnInput = () => {
    onSearch(input);
  };

  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'row',
        marginTop: 10,
        marginBottom: 10,
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 8,
        padding: 5,
        borderWidth: 0.3,
        borderColor: 'gray',
      }}>
      <View style={{flex: 10}}>
        <TextInput
          onChangeText={setInput}
          value={input}
          placeholder=" 통관부호를 입력하세요."
          placeholderTextColor="gray"
          style={{
            color: 'black',
          }}
        />
      </View>
      <View style={{flex: 1}}>
        <Pressable onPress={returnInput}>
          <SearchLogo width={20} height={20}></SearchLogo>
        </Pressable>
      </View>
    </View>
  );
};

export default SearchBox;
