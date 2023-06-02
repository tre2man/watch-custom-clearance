import {View} from 'react-native';
import Table from '../component/Table';

interface Props {
  data: any[];
}

const TableView = ({data}: Props) => {
  return (
    <View style={{margin: 10}}>
      <Table dataList={data} />
    </View>
  );
};

export default TableView;
