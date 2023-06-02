import {useEffect} from 'react';
import {Text, View} from 'react-native';
import Table from '../view/Table';

const ItemSituations = ({route}: {route: any}) => {
  const data = route?.params?.data;

  return (
    <View style={{margin: 10}}>
      <Table dataList={data} />
    </View>
  );
};

export default ItemSituations;
