import {useEffect} from 'react';
import {Text, View} from 'react-native';
import Table from './Table';

const ItemSituations = ({route}: {route: any}) => {
  const data = route?.params?.data;

  useEffect(() => {}, [data]);

  return (
    <View style={{margin: 10}}>
      <Table dataList={data} />
    </View>
  );
};

export default ItemSituations;
