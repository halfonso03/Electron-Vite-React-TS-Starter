// import agent from "../agent"
import { formatItem } from "../helpers/ItemHelpers";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { AddItemDto, ItemDto, ItemStatus, UpdateItemDto } from "@common/item";
import { number } from "yup";
import { ItemTypes } from "@common/itemType";
import { ItemFormData } from "../form-validation-schemas/itemSchema";


export const useItem = (id?: number) => {
    const navigate = useNavigate();
    const queryClient = useQueryClient();

    const { data: item, isLoading: loadingItem } = useQuery({
        queryKey: ['items', id],
        queryFn: async () => {
            const response = await window.electronAPI.getItem(id!);
            const parsedItem = formatItem(response.data!);
            return parsedItem;
        },
        enabled: id != null && id != undefined
    })

    const { mutate: createItem, isPending: isCreating, isSuccess: created } = useMutation({
        mutationFn: async (itemFormData: ItemFormData) => {

            const itemStatus = !itemFormData.assignedToId ? ItemStatus.Unassigned : ItemStatus.Assigned;

            const itemToAdd: AddItemDto = {
                ...itemFormData,
                itemStatusId: itemStatus,
                itemTypeId: itemFormData.itemTypeId as number,
                id: undefined
            }

            const response = await window.electronAPI.createItem(itemToAdd);

            const item: ItemDto = {
                ...itemToAdd,
                itemStatus: itemStatus == ItemStatus.Unassigned ? 'Unassiged' : 'Assigned',
                itemType: ItemTypes.filter(i => i.value == itemToAdd.itemTypeId.toString()).at(0)?.text!,
                id: response.data?.id!,
                created_at: response.data?.created_at!
            }

            return item;
        },
        onSuccess: (item: ItemDto) => {
            console.log('useMutation onSuccess create item', item, `/inventory/${item.id}`)
            toast.success('Item created');
            navigate(`/inventory/${item.id}`);
        }
    })

    const { mutate: updateItem, isPending: isUpdating, isSuccess: updated } = useMutation({
        mutationFn: async (itemFormData: ItemFormData) => {

            const itemStatus = !itemFormData.assignedToId ? ItemStatus.Unassigned : ItemStatus.Assigned;

            const itemToUpdate: UpdateItemDto = {
                ...itemFormData,
                itemStatusId: itemStatus,
                itemTypeId: itemFormData.itemTypeId as number,
            }

            const response = await window.electronAPI.updateItem(itemToUpdate);

            const item: ItemDto = {
                ...itemToUpdate,
                itemStatus: itemStatus == ItemStatus.Unassigned ? 'Unassiged' : 'Assigned',
                itemType: ItemTypes.filter(i => i.value == itemToUpdate.itemTypeId.toString()).at(0)?.text!,
                id: response.data?.id!,
                created_at: response.data?.created_at!
            }

            return item;
        },
        onSuccess: (item: ItemDto) => {
            toast.success('Item updated');
            queryClient.invalidateQueries(
                { queryKey: ['items', item.id] });
        }
    })

    const toggleDisposal = useMutation({
        mutationFn: async (id: number) => {
            const response = await window.electronAPI.toggleDisposal(id);
            return { id: id, disposed: response.data } as { id: number, disposed: boolean | null };
        },
        onSuccess: (response: { id: number, disposed: boolean | null }) => {
            queryClient.invalidateQueries(
                { queryKey: ['items', id] });
        }
    })

    return { createItem, isCreating, created, updateItem, isUpdating, updated, item, loadingItem, toggleDisposal };
}
