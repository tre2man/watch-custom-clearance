import {useEffect} from 'react';
import GetList from '../apis/GetList';
import ItemDetailView from '../view/ItemDetailView';
import LoadingView from '../view/LoadingView';

const ItemDetail = ({route, navigation}: {route: any; navigation: any}) => {
  const [isLoading, data] = GetList(route?.params?.cargMtNo);

  const itemInfo = data?.resultListM;

  if (isLoading || !data || !route) {
    return <LoadingView />;
  }

  return (
    <ItemDetailView
      navigation={navigation}
      itemInfo={itemInfo}
      printResultListL={data?.printResultListL}
      hblNo={data?.resultListM?.hblNo || ''}
    />
  );
};

export default ItemDetail;
