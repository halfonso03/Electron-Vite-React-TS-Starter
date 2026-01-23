import { useQuery } from '@tanstack/react-query';
import { formatItem } from "../helpers/ItemHelpers";
import { ItemDto } from '@common/item';

export const useInventory = (itemStatusId?: string) => {
	// const { pageNumber, searchTerm } = usePagination();

	// const queryKeySearchTerm = '';
	//pagination: PaginationData | undefined;

	const { data: itemResults, isLoading: loadingItems } = useQuery<{
		items: ItemDto[]
	}>({
		queryKey: ["inventory",],  //itemStatusId, pageNumber, searchTerm
		staleTime: 0,
		queryFn: async () => {

			const response = await window.electronAPI.getItems();
			const data = response.data ?? [];

			return { items: data }

			// const response = await agent.get<InventoryResponse>(
			// 	`/inventory/items/${itemStatusId}`,
			// 	{
			// 		params: { pageNumber, searchTerm },
			// 	}
			// );

			// const items: Item[] = response.data.items.map(formatItem);
			// const paginationHeader = response.headers["pagination"];
			// const pagination: PaginationData = paginationHeader
			// 	? JSON.parse(paginationHeader)
			// 	: null;
			// return { items, pagination };
		},
		enabled: itemStatusId != undefined,
	});

	return { itemResults, loadingItems };
};

