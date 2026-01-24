import { useQuery } from '@tanstack/react-query';
import { ItemDto, ItemsPagedResult } from '@common/item';
import { usePagination } from '../contexts/usePagination';
import { ResultResponse } from '@common/types';


export const useInventory = (itemStatusId?: string) => {
	const { searchTerm, pageNumber } = usePagination();

	const { data: itemResults, isLoading: loadingItems } = useQuery<{
		items: ItemDto[], pagination: PaginationData
	}>({
		queryKey: ["inventory", itemStatusId, searchTerm, pageNumber],
		staleTime: 0,
		queryFn: async () => {


			const response = (await window.electronAPI.getItems({
				itemStatusId: itemStatusId ?? "",
				searchTerm: searchTerm,
				pageNumber: pageNumber,
				pageSize: +import.meta.env.VITE_RESULTS_PAGE_SIZE!
			})) as ResultResponse<ItemsPagedResult>;


			const items = response.data!.items;

			const pagination: PaginationData = {
				currentPage: pageNumber,
				totalPages: response.data?.totalPages!,
				pageSize: import.meta.env.VITE_RESULTS_PAGE_SIZE,
				totalCount: response.data?.totalCount!
			}


			return { items, pagination }
		},
		enabled: itemStatusId != undefined,
	});

	return { itemResults, loadingItems };
};

