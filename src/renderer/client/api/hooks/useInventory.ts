// import { usePagination } from "../../app/contexts/usePagination";
// import { formatItem } from "../../helpers/ItemHelpers";

export const useInventory = (itemStatusId?: string) => {
	// const { pageNumber, searchTerm } = usePagination();

	// // const queryKeySearchTerm = '';
	// type InventoryResponse = {
	// 	items: Item[];
	// 	itemCount: number;
	// };

	// const { data: itemResults, isLoading: loadingItems } = useQuery<{
	// 	items: Item[];
	// 	pagination: PaginationData | undefined;
	// }>({
	// 	queryKey: ["inventory", itemStatusId, pageNumber, searchTerm],
	// 	staleTime: 0,
	// 	queryFn: async () => {
	// 		const response = await agent.get<InventoryResponse>(
	// 			`/inventory/items/${itemStatusId}`,
	// 			{
	// 				params: { pageNumber, searchTerm },
	// 			}
	// 		);
	// 		const items: Item[] = response.data.items.map(formatItem);
	// 		const paginationHeader = response.headers["pagination"];
	// 		const pagination: PaginationData = paginationHeader
	// 			? JSON.parse(paginationHeader)
	// 			: null;
	// 		return { items, pagination };
	// 	},
	// 	enabled: itemStatusId != undefined,
	// });

	// return { itemResults, loadingItems };
};
