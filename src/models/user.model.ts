import { AffiliatedTeamInfo } from './team.model';

/**
 * @description 테스트용 타입 (삭제 필요)
 */
export interface UserInfoDto {
	userId: string;
	userName: string;
	userImgUrl?: string;
}

/**
 * @description
 * 세션에 저장 될 유저 정보
 */
export interface UserSessionInfo {
	userId: string;
	userName: string;
	profileImg?: string;
	email: string;
	phone?: string;
	affiliatedTeamInfos?: AffiliatedTeamInfo[];
}
/**
 * @description
 * 작성자 정보
 */
export interface WriterInfoResponse {
	userId: string;
	userName: string;
	profileImg?: string;
	email: string;
	phone?: string;
}

export interface LoginRequest {
	email: string;
	password: string;
}
