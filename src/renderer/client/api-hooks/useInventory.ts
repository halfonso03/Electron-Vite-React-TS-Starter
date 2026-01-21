import { useQuery } from '@tanstack/react-query';
import { formatItem } from "../helpers/ItemHelpers";

export const useInventory = (itemStatusId?: string) => {
	// const { pageNumber, searchTerm } = usePagination();

	// const queryKeySearchTerm = '';
	type InventoryResponse = {
		items: Item[];
		itemCount: number;
	};


	//pagination: PaginationData | undefined;

	const { data: itemResults, isLoading: loadingItems } = useQuery<{
		items: Item[]
	}>({
		queryKey: ["inventory",],  //itemStatusId, pageNumber, searchTerm
		staleTime: 0,
		queryFn: async () => {

			const promise = new Promise<Item[]>((resolve) => {
				resolve([{ id: 0, description: 'item 1', createdOn: new Date() }])
			});

			const response = await promise;

			return { items: response }

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

