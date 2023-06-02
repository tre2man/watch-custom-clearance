import LoadingView from '../view/LoadingView';
import ItemListView from '../view/ItemListVIew';

interface Props {
  isLoading: boolean;
  data: any;
  navigation: any;
}

/**
 * data는 입력받은 전체데이터
 * @param param0
 * @returns
 */
const ItemList = ({isLoading, data, navigation}: Props) => {
  const dataList = data?.resultList ? (data.resultList as any[]) : [];

  if (isLoading) {
    return <LoadingView />;
  }

  return <ItemListView dataList={dataList} navigation={navigation} />;
};

export default ItemList;
