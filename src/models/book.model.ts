/**
 * @description
 * 도서 정보 (네이버 도서 검색 API Response 기반)
 */
export interface BookInfo {
	title?: string;
	link?: string;
	image?: string;
	author?: string;
	// 도서 판매 가격
	discount?: string;
	publisher?: string;
	// 출간일
	pubdate?: string;
	isbn?: string;
	description?: string;
}
