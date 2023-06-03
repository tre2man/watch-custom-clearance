export const getPostOfficeUrl = (hblNo: string) => {
  return `https://service.epost.go.kr/trace.RetrieveDomRigiTraceList.comm?sid1=${hblNo}`;
};

export const getCjUrl = (hblNo: string) => {
  return `http://nplus.doortodoor.co.kr/web/detail.jsp?slipno=${hblNo}`;
};

export const gethanjinUrl = (hblNo: string) => {
  return `https://www.hanjin.co.kr/kor/CMS/DeliveryMgr/WaybillResult.do?mCode=MN038&wblnum=${hblNo}&schLang=KR`;
};
