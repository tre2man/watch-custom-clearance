import {ScrollView, Text, View} from 'react-native';
import dayjs from 'dayjs';
import he from 'he';
import MainText from './MainText';

interface Props {
  dataList: any[];
}

const Table = ({dataList}: Props) => {
  return (
    <ScrollView>
      <View>
        {dataList.map((data: any, idx: number) => (
          <View
            key={idx}
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
            <View>
              <MainText>{`처리시간 : ${dayjs(data.prcsDttm).format(
                'YYYY:MM:DD HH:mm:ss',
              )}`}</MainText>
              <MainText>{`처리단계 : ${data.cargTrcnRelaBsopTpcd}`}</MainText>
              <MainText>{`위치 : ${he.decode(data.snarKoreNm)}`}</MainText>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

export default Table;
