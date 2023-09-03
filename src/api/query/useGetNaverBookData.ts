import { QueryKeys } from '@constants/QueryKeys';
import { useQuery } from 'react-query';
import { getNaverSearchList } from '../getNaverSearchList';

type Params = {
	query: string;
};

/**
 * 추후 적용
 */
export const useGetNaverSearchList = (params: Params) => {
	// const { data, ...rest } = useQuery([QueryKeys.NAVER_SEARCH_LIST, params], () => getNaverSearchList(params), {
	// 	refetchOnWindowFocus: false,
	// 	enabled: Boolean(params),
	// });
	// return {
	// 	naverSearchResult: data && data,
	// };
};
