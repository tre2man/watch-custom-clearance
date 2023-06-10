import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import ArrowLogo from '../Images/arrow.svg';
import {useRecoilState} from 'recoil';
import {ThemeColor, ThemeState} from '../utils/ThemeState';
import {MainText} from '../component';

interface OneItemProps {
  oneData: any;
  navigation: any;
  key: number;
}

/**
 *
 * @param param0 {OneItemProps}
 * @returns 테이블의 한개의 아이템 반환
 */
const OneItem = ({oneData, navigation, key}: OneItemProps) => {
  const [theme] = useRecoilState<ThemeColor>(ThemeState);

  return (
    <View key={key} id={`${key}`}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('상품정보', {
            cargMtNo: oneData.cargMtNo,
          });
        }}
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          flexDirection: 'row',
          marginTop: 5,
          marginBottom: 5,
          backgroundColor: theme === 'light' ? 'white' : '#121212',
          borderRadius: 8,
          padding: 5,
          borderWidth: 0.3,
          borderColor: 'gray',
        }}>
        <View key={key} id={`${key}`}>
          <MainText>{`반출일자 : ${oneData.acptDt}`}</MainText>
          <MainText>{`현재상태 : ${oneData.csclForm}`}</MainText>
          <MainText>{`B/L : ${oneData.hblNo}`}</MainText>
        </View>
        <View
          style={{
            justifyContent: 'center',
          }}>
          <ArrowLogo
            width={20}
            height={20}
            fill={theme === 'light' ? 'black' : 'white'}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};

interface ItemListProps {
  dataList: any[];
  navigation: any;
}

/**
 * 테이블 뷰를 위한 컴포넌트
 * @param param0 {ItemListProps}
 * @returns
 */
const ItemListView = ({dataList, navigation}: ItemListProps) => {
  return (
    <View>
      <ScrollView style={{height: '100%'}}>
        {dataList.map((item: any, key: number) => (
          <OneItem oneData={item} navigation={navigation} key={key} />
        ))}
      </ScrollView>
    </View>
  );
};

export default ItemListView;
