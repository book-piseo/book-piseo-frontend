import { BookInfo } from './book.model';
import { PageableResponse } from './page.model';
import { WriterInfoResponse } from './user.model';

/**
 * @description
 * 게시물 정보
 */
export interface ContentsInfoResponse {
	contentsId: string;
	contentsTitle: string;
	contentsText?: string;
	bookInfo: BookInfo;
	teamId: string;
	teamName: string;
	writerInfo?: WriterInfoResponse;
	regDt: string;
}

export interface ContentsSaveRequest {
	contentsTitle: string;
	contentsText?: string;
	bookInfo: BookInfo;
	teamId: string;
}

export type PageContentsInfoReponse = PageableResponse & { content: ContentsInfoResponse[] };
