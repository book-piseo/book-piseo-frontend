import axios from 'axios';


export const getNaverSearchList = ({ query }: { query: string }) => {
	axios
		.get(`api/proxy/v1/search/book?query=${query}`)
		.then((res:any) => {
			return res;
		})
		.catch((error) => {
			console.debug(error);
		});
};
