type Item = {
    id: number
    description: string
    createdOn: Date
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
    initiative?: string
    dateAssigned?: Date | null
    assignedToId?: number
    assignedTo?: string | null
    assignedToEmail?: string | null
    assignedToExtension?: string | null,
    itemStatusId: number,
    itemStatus: string,
    disposalDate: Date | null,
    kbmsId?: string,
    vendorId?: string,
    driverType?: string,
    sharedName?: string,
}


type Person = {
    id: number
    firstName: string,
    lastName: string,
    email: string,
    extension: string,
    items?: Item[] | null | undefined,
}

type Initiative = {
    id: number,
    name: string
}

type PaginationData = {
    currentPage: number;
    totalPages: number;
    pageSize: number;
    totalCount: number
}

type SelectOption = {
    value: string;
    text: string;
};