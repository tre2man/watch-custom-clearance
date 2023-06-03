export const getPostOfficeUrl = (hblNo: string) => {
  return (
    'https://service.epost.go.kr/trace.RetrieveDomRigiTraceList.comm?sid1=' +
    String(hblNo)
  );
};

export const getCjUrl = (hblNo: string) => {
  return 'http://nplus.doortodoor.co.kr/web/detail.jsp?slipno=' + String(hblNo);
};

export const gethanjinUrl = (hblNo: string) => {
  return (
    'http://www.hanjin.co.kr/Delivery_html/inquiry/result_waybill.jsp?wbl_num=' +
    String(hblNo)
  );
};
