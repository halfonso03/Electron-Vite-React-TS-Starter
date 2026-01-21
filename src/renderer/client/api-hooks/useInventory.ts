import { useQuery } from '@tanstack/react-query';
import { formatItem } from "../helpers/ItemHelpers";
import { Item, ItemDto } from '@common/item';

export const useInventory = (itemStatusId?: string) => {
	// const { pageNumber, searchTerm } = usePagination();

	// const queryKeySearchTerm = '';
	type InventoryResponse = {
		items: ItemDto[];
		itemCount: number;
	};


	//pagination: PaginationData | undefined;

	const { data: itemResults, isLoading: loadingItems } = useQuery<{
		items: ItemDto[]
	}>({
		queryKey: ["inventory",],  //itemStatusId, pageNumber, searchTerm
		staleTime: 0,
		queryFn: async () => {

			const response = await window.electronAPI.getItems();
			const data = response.data ?? [];

			// const promise = new Promise<ItemDto[]>((resolve) => {
			// 	resolve([{
			// 		id: 0, description: 'item 1', created_at: 'null', itemTypeId: 1,
			// 		hbcNumber: 'hbc', serialNumber: "123", itemType: 'computer',
			// 		assignedToId: 1, itemStatusId: 1, initiativeId: 1
			// 	}])
			// });

			// const response = await promise;

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

