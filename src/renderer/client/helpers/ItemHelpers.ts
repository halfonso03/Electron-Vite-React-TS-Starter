import { ItemDto } from "@common/item";

export function formatItem(item: ItemDto) {

    const r = item;

    return {
        ...r,
        createdOn: new Date(r.created_at!),

    };
}

// dateAssigned: r.dateAssigned ? new Date(r.dateAssigned) : null,
//         disposalDate: r.disposalDate ? new Date(r.disposalDate) : null,