// import agent from "../agent"
import { formatItem } from "../helpers/ItemHelpers";
import type { ItemFormData } from "../form-validation-schemas/itemSchema";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { AddItemDto, ItemDto, ItemStatus } from "@common/item";
import { number } from "yup";
import { ItemTypes } from "@common/itemType";


export const useItem = (id?: number) => {
    const navigate = useNavigate();
    const queryClient = useQueryClient();

    // const { data: item, isLoading: loadingItem } = useQuery({
    //     queryKey: ['items', id],
    //     queryFn: async () => {
    //         const response = await agent.get<Item>('/inventory/item/' + id);
    //         const parsedItem = formatItem(response.data);
    //         return parsedItem;
    //     },
    //     enabled: id != null && id != undefined
    // })

    const { mutate: createItem, isPending: isCreating, isSuccess: created } = useMutation({
        mutationFn: async (itemFormData: ItemFormData) => {

            console.log('item to insert', itemFormData);


            const itemStatus = !itemFormData.assignedToId ? ItemStatus.Unassigned : ItemStatus.Assigned;

            const addItemDto: AddItemDto = {
                hbcNumber: itemFormData.hbcNumber,
                description: itemFormData.description,
                serialNumber: itemFormData.serialNumber as string | undefined,
                itemType: '',
                itemTypeId: itemFormData.itemTypeId as number,
                itemStatusId: itemStatus,
                computerName: itemFormData.computerName,
                ipAddress: itemFormData.ipAddress,
                macAddress: itemFormData.macAddress,
                cabinetOrRack: itemFormData.cabinetOrRack,
                cubicle_Room: itemFormData.cubicle_Room
            };


            console.log('item to insert', addItemDto);

            const response = await window.electronAPI.createItem(addItemDto);

            console.log('new data ', response.data)

            const item: ItemDto = {
                ...addItemDto,
                itemStatus: itemStatus == ItemStatus.Unassigned ? 'Unassiged' : 'Assigned',
                itemType: ItemTypes.filter(i => i.value == addItemDto.itemTypeId.toString()).at(0)?.text!,
                id: response.data?.id!,
                created_at: response.data?.created_at!
            }

            return item;
        },
        onSuccess: (item: ItemDto) => {
            console.log('useMutation onSuccess create item', item)
            toast.success('Item created');
            navigate(`/inventory/${item.id}`);
        }
    })

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

    return { createItem, isCreating, created };// updateItem, isUpdating, updated, item, loadingItem, toggleDisposal };
}
