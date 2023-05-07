import {useEffect} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import dayjs from 'dayjs';
import he from 'he';

const Table = ({dataList}: {dataList: any[]}) => {
  useEffect(() => {}, [dataList]);

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
              <Text style={[styles.text]}>{`처리시간 : ${dayjs(
                data.prcsDttm,
              ).format('YYYY:MM:DD HH:mm:ss')}`}</Text>
              <Text
                style={[
                  styles.text,
                ]}>{`처리단계 : ${data.cargTrcnRelaBsopTpcd}`}</Text>
              <Text style={[styles.text]}>{`위치 : ${he.decode(
                data.snarKoreNm,
              )}`}</Text>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  text: {
    color: 'black',
  },
});

export default Table;
