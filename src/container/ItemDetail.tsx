import {useEffect} from 'react';
import GetList from '../apis/GetList';
import ItemDetailView from '../view/ItemDetailView';
import LoadingView from '../view/LoadingView';
import {BackHandler} from 'react-native';

const ItemDetail = ({route, navigation}: {route: any; navigation: any}) => {
  const [isLoading, data] = GetList(route?.params?.cargMtNo);

  const itemInfo = data?.resultListM;

  if (isLoading || !data || !route) {
    return <LoadingView />;
  }

  // TODO: 뒤로가기 동작 구현하기

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
