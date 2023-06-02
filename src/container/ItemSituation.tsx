import TableView from '../view/TableView';

const ItemSituations = ({route}: {route: any}) => {
  const data = route?.params?.data as any[];

  return <TableView data={data} />;
};

export default ItemSituations;
