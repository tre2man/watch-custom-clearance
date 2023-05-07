import axios from 'axios';
import {useEffect, useState} from 'react';
import {LIST_API_URL} from '@env';

/**
 * 특정한 물품의 상세정보를 가져온다.
 * @param cargMtNo
 * @returns [isLoading, data] isLoading: 로딩중인지, data: 가져온 데이터
 */
const GetList = (cargMtNo: string): [isLoading: boolean, data: any] => {
  const [isLoading, setLoading] = useState<boolean>(true);
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    axios
      .post(
        LIST_API_URL,
        new URLSearchParams({
          cargMtNo,
        }).toString(),
      )
      .then(response => {
        setData(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.log(error);
      });
  }, [cargMtNo]);

  return [isLoading, data];
};

export default GetList;
