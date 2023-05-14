import {useEffect} from 'react';
import {
  ActivityIndicator,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import ArrowLogo from '../Images/arrow.svg';

const OneItem = ({
  oneData,
  navigation,
  key,
}: {
  oneData: any;
  navigation: any;
  key: number;
}) => {
  return (
    <View key={key} id={`${key}`}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('상품정보', {cargMtNo: oneData.cargMtNo});
        }}
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          flexDirection: 'row',
          marginTop: 5,
          marginBottom: 5,
          backgroundColor: 'white',
          borderRadius: 8,
          padding: 5,
          borderWidth: 0.3,
          borderColor: 'gray',
        }}>
        <View key={key} id={`${key}`}>
          <Text style={{color: 'black'}}>{`반출일자 : ${oneData.acptDt}`}</Text>
          <Text
            style={{color: 'black'}}>{`현재상태 : ${oneData.csclForm}`}</Text>
          <Text style={{color: 'black'}}>{`B/L : ${oneData.hblNo}`}</Text>
        </View>
        <View
          style={{
            justifyContent: 'center',
          }}>
          <ArrowLogo width={20} height={20}></ArrowLogo>
        </View>
      </TouchableOpacity>
    </View>
  );
};

/**
 * data는 입력받은 전체데이터
 * @param param0
 * @returns
 */
const ItemList = ({
  isLoading,
  data,
  navigation,
}: {
  isLoading: boolean;
  data: any;
  navigation: any;
}) => {
  const dataList = data?.resultList ? (data.resultList as any[]) : [];

  useEffect(() => {}, [data, isLoading]);

  if (isLoading) {
    return (
      <View>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

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

export default ItemList;
