import {Linking, Pressable, StyleSheet, Text, View} from 'react-native';
import he from 'he';
import {getCjUrl, getPostOfficeUrl, gethanjinUrl} from '../utils/GetPostUrl';

interface Props {
  navigation: any;
  itemInfo: any;
  printResultListL: any;
  hblNo: string;
}

const ItemDetailView = ({
  navigation,
  itemInfo,
  printResultListL,
  hblNo,
}: Props) => {
  return (
    <View style={{margin: 10}}>
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
          <Text style={[styles.text]}>{`진행상태 : ${itemInfo.prgsStts}`}</Text>
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
              marginBottom: 10,
            }}
            onPress={() => {
              navigation.navigate('상품상태', {data: printResultListL});
            }}>
            <Text
              style={{
                color: 'white',
                textAlign: 'center',
              }}>
              자세한 정보 확인
            </Text>
          </Pressable>
          {hblNo.length <= 0 && <></>}
          {hblNo.length === 13 && (
            // 우체국 택배 조회
            <Pressable
              style={{
                borderRadius: 5,
                padding: 10,
                elevation: 2,
                height: 40,
                backgroundColor: 'gray',
                marginBottom: 10,
              }}
              onPress={async () => {
                const nowUrl = getPostOfficeUrl(hblNo);
                const isSupportUrl = nowUrl;
                if (isSupportUrl) {
                  await Linking.openURL(nowUrl);
                } else {
                  console.error('지원하지 않는 URL입니다.');
                }
              }}>
              <Text
                style={{
                  color: 'white',
                  textAlign: 'center',
                }}>
                우체국 홈페이지 조회
              </Text>
            </Pressable>
          )}
          {(hblNo.length === 12 || hblNo.length === 10) && (
            // 한진 또는 CJ택배 조회
            <>
              <Pressable
                style={{
                  borderRadius: 5,
                  padding: 10,
                  elevation: 2,
                  height: 40,
                  backgroundColor: 'gray',
                  marginBottom: 10,
                }}
                onPress={async () => {
                  const nowUrl = gethanjinUrl(hblNo);
                  const isSupportUrl = nowUrl;
                  if (isSupportUrl) {
                    await Linking.openURL(nowUrl);
                  } else {
                    console.error('지원하지 않는 URL입니다.');
                  }
                }}>
                <Text
                  style={{
                    color: 'white',
                    textAlign: 'center',
                  }}>
                  한진택배 홈페이지 조회
                </Text>
              </Pressable>
              <Pressable
                style={{
                  borderRadius: 5,
                  padding: 10,
                  elevation: 2,
                  height: 40,
                  backgroundColor: 'gray',
                  marginBottom: 10,
                }}
                onPress={async () => {
                  const nowUrl = getCjUrl(hblNo);
                  const isSupportUrl = nowUrl;
                  if (isSupportUrl) {
                    await Linking.openURL(nowUrl);
                  } else {
                    console.error('지원하지 않는 URL입니다.');
                  }
                }}>
                <Text
                  style={{
                    color: 'white',
                    textAlign: 'center',
                  }}>
                  CJ택배 홈페이지 조회
                </Text>
              </Pressable>
            </>
          )}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    marginBottom: 10,
    color: 'black',
  },
});

export default ItemDetailView;
