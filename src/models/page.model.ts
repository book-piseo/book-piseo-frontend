export interface PageableResponse {
	totalElements?: number;
	totalPages?: number;
	size?: number;
	number?: number;
	numberOfElements?: number;
	sort?: SortObject;
	pageable?: PageableObject;
	first?: boolean;
	last?: boolean;
	empty?: boolean;
}

interface SortObject {
	empty?: boolean;
	unsorted?: boolean;
	sorted?: boolean;
}

interface PageableObject {
	offset?: number;
	paged?: boolean;
	unpaged?: boolean;
	pageNumber?: number;
	pageSize?: number;
	sort: SortObject;
}
