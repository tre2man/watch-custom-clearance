import {useEffect} from 'react';
import {Text, View} from 'react-native';
import Table from './Table';

const ItemSituations = ({route}: {route: any}) => {
  const data = route?.params?.data;

  useEffect(() => {
    console.log('시츄에이션');
    console.log(data);
  }, [data]);

  return (
    <View style={{margin: 10}}>
      <Table dataList={data} />
    </View>
  );
};

export default ItemSituations;
