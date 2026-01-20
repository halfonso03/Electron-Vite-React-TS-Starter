// import agent from "../agent"
import { formatItem } from "../../helpers/ItemHelpers";
import type { ItemFormData } from "../../schemas/itemSchema";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";


export const useItem = (id?: number) => {
    const navigate = useNavigate();

    // const { data: item, isLoading: loadingItem } = useQuery({
    //     queryKey: ['items', id],
    //     queryFn: async () => {
    //         const response = await agent.get<Item>('/inventory/item/' + id);
    //         const parsedItem = formatItem(response.data);
    //         return parsedItem;
    //     },
    //     enabled: id != null && id != undefined
    // })

    // const { mutate: createItem, isPending: isCreating, isSuccess: created } = useMutation({
    //     mutationFn: async (item: ItemFormData) => {
    //         const response = await agent.post(`inventory`, item)
    //         return response.data;
    //     },
    //     onSuccess: (item: Item) => {
    //         // console.log('create item', item)
    //         toast.success('Item created');
    //         navigate(`/inventory/${item.id}`);
    //     }
    // })

    // const { mutate: updateItem, isPending: isUpdating, isSuccess: updated } = useMutation({
    //     mutationFn: async (item: ItemFormData) => {
    //         const response = await agent.put(`inventory/${item.id}`, item)
    //         return response.data;
    //     },
    //     onSuccess: (item: Item) => {
    //         // console.log('item', item)
    //         toast.success('Item updated');
    //         queryClient.invalidateQueries(
    //             { queryKey: ['items', item.id] });
    //     }
    // })

    // const toggleDisposal = useMutation({
    //     mutationFn: async (id: number) => {
    //         const response = await agent.post(`inventory/item/dispose/${id}`)
    //         return response.data;
    //     },
    //     onSuccess: (item: Item) => {
    //         queryClient.invalidateQueries(
    //             { queryKey: ['items', item.id] });
    //     }
    // })

    // return { createItem, isCreating, created, updateItem, isUpdating, updated, item, loadingItem, toggleDisposal };
}
