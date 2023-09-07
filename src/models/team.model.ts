/**
 * @description
 * 유저가 소속 된 팀 요약 정보
 */
export interface AffiliatedTeamInfo {
	teamId: string;
	teamName: string;
	teamDescription?: string;
	teamImg?: string;
	isMaster: boolean;
}

/**
 * @description
 * 팀 상세 정보
 */
export interface TeamDetailInfoReponse {
	teamId: string;
	teamName: string;
	teamDescription?: string;
	teamImg?: string;
	// 팀에 대한 세션 유저의 마스터 권한 여부
	isMaster: boolean;
	teamMembers: TeamMemberInfoResponse[];
}

/**
 * @description
 * 팀에 소속 된 멤버 정보
 */
export interface TeamMemberInfoResponse {
	userId: string;
	userName: string;
	profileImg?: string;
	email: string;
	phone?: string;
	// 팀 소속 멤버의 마스터 권한 여부
	isMaster: boolean;
}
