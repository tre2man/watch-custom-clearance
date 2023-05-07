import axios from 'axios';
import {useEffect, useState} from 'react';
import {DETAIL_API_URL} from '@env';

/**
 * @description 통관부호에 매칭하는 물품들을 가져온다
 * @param pcode
 * @returns [isLoading, data] isLoading: 로딩중인지, data: 가져온 데이터
 */
const GetData = (pcode: string): [isLoading: boolean, data: any] => {
  const [isLoading, setLoading] = useState<boolean>(true);
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    axios
      .post(
        DETAIL_API_URL,
        new URLSearchParams({
          pcode,
        }).toString(),
      )
      .then(response => {
        setData(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.log(error);
      });
  }, [pcode]);

  return [isLoading, data];
};

export default GetData;
