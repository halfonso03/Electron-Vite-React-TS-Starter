export function formatItem(item: Item) {

    const r = item;

    return {
        ...r,
        createdOn: new Date(r.createdOn),
        dateAssigned: r.dateAssigned ? new Date(r.dateAssigned) : null,
        disposalDate: r.disposalDate ? new Date(r.disposalDate) : null,
    };
}