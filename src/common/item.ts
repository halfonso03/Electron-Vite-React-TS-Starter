
export enum ItemStatus {
    Unassigned = 1,
    Assigned = 2,
    TBD = 3,
    Disposed = 4
}

// interface for item returned from sqlite 
export interface DbItem {
    items: {
        id: number;
        description: string;
        created_at: string;
        hbcNumber: string;
        computerName: string | null;
        serialNumber: string | null;
        cubicle_Room: string | null;
        ipAddress: string | null;
        macAddress: string | null;
        cabinetOrRack: string | null;
        itemTypeId: number;
        initiativeId: number | null;
        assignedToId: number | null;
        itemStatusId: number;
        disposalDate: string | null;
        assignedDate: string | null;
        kbmsId: string | null;
        vendorId: string | null;
        driverType: string | null;
        sharedName: string | null;
    };
    assignee: {
        id: number;
        locationName: string | null;
        firstName?: string | undefined | null
        lastName?: string | undefined | null
        email?: string | undefined | null
        extension?: string | undefined | null
        assigneeTypeId: | number
    } | null;
    initiative: {
        id: number
        name: string
    } | null;
}

export interface ItemsPagedResult {
    items: ItemDto[]
    totalCount: number
    currentPage: number
    totalPages: number
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
    disposalDate?: Date | null,
    kbmsId?: string,
    vendorId?: string,
    driverType?: string,
    sharedName?: string,
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

    initiative?: string | null
    assignedDate?: Date | null
    assignedToId?: number | undefined | null

    assignedTo?: string | null

    // assignedToEmail?: string | null
    // assignedToExtension?: string | null,
    itemStatusId: ItemStatus | number,
    itemStatus?: string,
    disposalDate?: Date | null,
    kbmsId?: string | null | undefined,
    vendorId?: string | null | undefined,
    driverType?: string | null | undefined,
    sharedName?: string | null | undefined,
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

    assignedDate?: Date | null

    itemStatusId: ItemStatus | number,

    disposalDate?: Date | null,
    kbmsId?: string | null | undefined,
    vendorId?: string | null | undefined,
    driverType?: string | null | undefined,
    sharedName?: string | null | undefined,
}


export interface UpdateItemDto extends AddItemDto { }


export const defaultItem: ItemDto = {
    id: 0,
    hbcNumber: undefined,
    itemTypeId: 0,
    itemStatusId: 0
};
