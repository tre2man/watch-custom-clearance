import {View} from 'react-native';
import Table from '../component/Table';
import {MainText} from '../component';
import dayjs from 'dayjs';
import he from 'he';
import {useRecoilState} from 'recoil';
import {ThemeColor, ThemeState} from '../utils/ThemeState';

interface Props {
  data: any[];
}

const TableView = ({data}: Props) => {
  const [theme] = useRecoilState<ThemeColor>(ThemeState);

  const EachDataView = (
    <>
      {data.map((data: any, idx: number) => (
        <View
          key={idx}
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
          <View>
            <MainText>{`처리시간 : ${dayjs(data.prcsDttm).format(
              'YYYY:MM:DD HH:mm:ss',
            )}`}</MainText>
            <MainText>{`처리단계 : ${data.cargTrcnRelaBsopTpcd}`}</MainText>
            <MainText>{`위치 : ${he.decode(data.snarKoreNm)}`}</MainText>
          </View>
        </View>
      ))}
    </>
  );

  return <Table>{EachDataView}</Table>;
};

export default TableView;
