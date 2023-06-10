import Table from '../component/Table';

interface Props {
  data: any[];
}

const TableView = ({data}: Props) => {
  return <Table dataList={data} />;
};

export default TableView;
