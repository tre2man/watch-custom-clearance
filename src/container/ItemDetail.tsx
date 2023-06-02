import {useEffect} from 'react';
import GetList from '../apis/GetList';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import he from 'he';
import ItemSituations from './ItemSituation';

const ItemDetail = ({route, navigation}: {route: any; navigation: any}) => {
  const [isLoading, data] = GetList(route?.params?.cargMtNo);

  const itemInfo = data?.resultListM;

  useEffect(() => {}, [route, data]);

  return (
    <View style={{margin: 10}}>
      {isLoading || !data || !route ? (
        <Text>정보가 없습니다.</Text>
      ) : (
        <View
          style={{
            padding: 5,
          }}>
          <View>
            <Text
              style={[
                styles.text,
              ]}>{`화물 관리 번호 : ${itemInfo.cargMtNo}`}</Text>
            <Text
              style={[
                styles.text,
              ]}>{`통관 진행 상태 : ${itemInfo.csclPrgsStts}`}</Text>
            <Text
              style={[styles.text]}>{`진행상태 : ${itemInfo.prgsStts}`}</Text>
            <Text style={[styles.text]}>{`품명 : ${itemInfo.prnm}`}</Text>
            <Text style={[styles.text]}>{`특송업체 : ${he.decode(
              itemInfo.entsKoreNm,
            )}`}</Text>
          </View>
          <View style={{padding: 20}}>
            <Pressable
              style={{
                borderRadius: 5,
                padding: 10,
                elevation: 2,
                height: 40,
                backgroundColor: 'gray',
              }}
              onPress={() => {
                navigation.navigate('상품상태', {data: data?.printResultListL});
              }}>
              <Text
                style={{
                  color: 'white',
                  textAlign: 'center',
                }}>
                자세한 정보 확인
              </Text>
            </Pressable>
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    marginBottom: 10,
    color: 'black',
  },
});

export default ItemDetail;
