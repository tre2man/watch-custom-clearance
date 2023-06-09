import {Linking, Pressable, StyleSheet, Text, View} from 'react-native';
import he from 'he';
import {getCjUrl, getPostOfficeUrl, gethanjinUrl} from '../utils/GetPostUrl';
import MainText from '../component/MainText';

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
          <MainText>{`화물 관리 번호 : ${itemInfo.cargMtNo}`}</MainText>
          <MainText>{`통관 진행 상태 : ${itemInfo.csclPrgsStts}`}</MainText>
          <MainText>{`진행상태 : ${itemInfo.prgsStts}`}</MainText>
          <MainText>{`품명 : ${itemInfo.prnm}`}</MainText>
          <MainText>{`특송업체 : ${he.decode(itemInfo.entsKoreNm)}`}</MainText>
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
            onPress={() =>
              navigation.navigate('상품상태', {
                data: printResultListL,
              })
            }>
            <MainText>자세한 정보 확인</MainText>
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
              <MainText>우체국 홈페이지 조회</MainText>
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
                <MainText>한진택배 홈페이지 조회</MainText>
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
                <MainText>CJ택배 홈페이지 조회</MainText>
              </Pressable>
            </>
          )}
        </View>
      </View>
    </View>
  );
};

export default ItemDetailView;
