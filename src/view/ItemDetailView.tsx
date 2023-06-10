import {Linking, SafeAreaView, View} from 'react-native';
import he from 'he';
import {getCjUrl, getPostOfficeUrl, gethanjinUrl} from '../utils/GetPostUrl';
import {useRecoilState} from 'recoil';
import {ThemeColor, ThemeState} from '../utils/ThemeState';
import {DetailPressable, MainText} from '../component';

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
  const [theme] = useRecoilState<ThemeColor>(ThemeState);

  const getOnPressUrl = (urlFunc: (input: string) => string, hblNo: string) => {
    return async () => {
      const nowUrl = urlFunc(hblNo);
      const isSupportUrl = nowUrl;
      if (isSupportUrl) {
        await Linking.openURL(nowUrl);
      } else {
        console.error('지원하지 않는 URL입니다.');
      }
    };
  };

  return (
    <SafeAreaView
      style={{
        padding: 10,
        height: '100%',
        backgroundColor: theme === 'light' ? 'white' : '#121212',
      }}>
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
          <DetailPressable
            onPress={() =>
              navigation.navigate('상품상태', {
                data: printResultListL,
              })
            }>
            <MainText>자세한 정보 확인</MainText>
          </DetailPressable>
          {hblNo.length <= 0 && <></>}
          {hblNo.length === 13 && (
            // 우체국 택배 조회
            <DetailPressable onPress={getOnPressUrl(getPostOfficeUrl, hblNo)}>
              <MainText>우체국 홈페이지 조회</MainText>
            </DetailPressable>
          )}
          {(hblNo.length === 12 || hblNo.length === 10) && (
            // 한진 또는 CJ택배 조회
            <>
              <DetailPressable onPress={getOnPressUrl(gethanjinUrl, hblNo)}>
                <MainText>한진택배 홈페이지 조회</MainText>
              </DetailPressable>
              <DetailPressable onPress={getOnPressUrl(getCjUrl, hblNo)}>
                <MainText>CJ택배 홈페이지 조회</MainText>
              </DetailPressable>
            </>
          )}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ItemDetailView;
