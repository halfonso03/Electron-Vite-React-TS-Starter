import { useQuery } from '@tanstack/react-query';
import { ItemDto, ItemsPagedResult } from '@common/item';
import { usePagination } from '../contexts/usePagination';

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
				pageSize: 10
			})) as ItemsPagedResult;

			const items = response.items;

			const pagination: PaginationData = {
				currentPage: pageNumber,
				totalPages: response.totalPages,
				pageSize: 10,
				totalCount: response.totalCount
			}

			return { items, pagination }

		},
		enabled: itemStatusId != undefined,
	});

	return { itemResults, loadingItems };
};

