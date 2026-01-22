
export enum ItemStatus {
    Unassigned = 1,
    Assigned = 2,
    TBD = 3,
    Disposed = 4
}


export type Item = {
    id: number
    description: string
    created_at: string | null | undefined
    hbcNumber: string
    computerName?: string
    serialNumber: string
    cubicle_Room?: string
    ipAddress?: string
    macAddress?: string
    cabinetOrRack?: string
    itemTypeId: number
    itemType: string
    initiativeId: number
    // initiative?: string
    // dateAssigned?: Date | null
    assignedToId?: number
    // assignedTo?: string | null
    // assignedToEmail?: string | null
    // assignedToExtension?: string | null,
    itemStatusId: ItemStatus | number,
    // itemStatus: string,
    // disposalDate: Date | null,
    // kbmsId?: string,
    // vendorId?: string,
    // driverType?: string,
    // sharedName?: string,
}


export type ItemDto = {
    id: number
    description?: string | null | undefined
    created_at?: string
    hbcNumber: string | null | undefined
    computerName?: string | null | undefined
    serialNumber?: string | null | undefined
    cubicle_Room?: string | null | undefined
    ipAddress?: string | null | undefined
    macAddress?: string | null | undefined
    cabinetOrRack?: string | null | undefined
    itemTypeId: number
    itemType?: string
    initiativeId?: number | undefined | null

    // initiative?: string
    // dateAssigned?: Date | null
    assignedToId?: number | undefined | null

    // assignedTo?: string | null
    // assignedToEmail?: string | null
    // assignedToExtension?: string | null,
    itemStatusId: ItemStatus | number,
    itemStatus?: string,
    // disposalDate: Date | null,
    // kbmsId?: string,
    // vendorId?: string,
    // driverType?: string,
    // sharedName?: string,
}


export type AddItemDto = {
    id?: number
    description: string
    created_at?: string
    hbcNumber: string
    computerName?: string | undefined
    itemTypeId: number
    assignedToId?: number | undefined | null
    serialNumber?: string | null | undefined
    cubicle_Room?: string | null | undefined
    ipAddress?: string | null | undefined
    macAddress?: string | null | undefined
    cabinetOrRack?: string | null | undefined
    initiativeId?: number | undefined | null
    // dateAssigned?: Date | null
    itemStatusId: ItemStatus | number,
    // disposalDate: Date | null,
    // kbmsId?: string,
    // vendorId?: string,
    // driverType?: string,
    // sharedName?: string,
}


export interface UpdateItemDto extends AddItemDto { }


export const defaultItem: ItemDto = {
    id: 0,
    hbcNumber: undefined,
    itemTypeId: 0,
    itemStatusId: 0
};
