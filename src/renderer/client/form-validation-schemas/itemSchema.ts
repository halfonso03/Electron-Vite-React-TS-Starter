import * as Yup from 'yup';

export interface ItemFormSchema {
    id: number
    description: string
    hbcNumber: string
    computerName?: string | undefined
    itemTypeId: number
    assignedToId?: number | null | undefined
    serialNumber?: string | null | undefined
    ipAddress?: string | null | undefined
    macAddress?: string | null | undefined
    initiativeId?: number | undefined | null
    cubicle_Room?: string | null | undefined,
    cabinetOrRack?: string | null | undefined,
    kbmsId?: string | null | undefined,
    vendorId?: string | null | undefined,
    driverType?: string | null | undefined,
    sharedName?: string | null | undefined,
}


export interface ItemFormData {
    id: number
    description: string
    hbcNumber: string
    computerName?: string | undefined
    itemTypeId?: number
    assignedToId?: number | null
    serialNumber?: string | null
    ipAddress?: string | null
    macAddress?: string | null
    cabinetOrRack?: string | null,
    initiativeId?: number | undefined | null
    cubicle_Room?: string | null,
    kbmsId?: string | null,
    vendorId?: string | null,
    driverType?: string | null,
    sharedName?: string | null,
}


export const itemFormSchema = Yup.object().shape({
    id: Yup.number().required("*"),
    description: Yup.string().required('*'),
    itemTypeId: Yup.mixed().not(['0', 0, ''], "*"),
    hbcNumber: Yup.string().required('*'),
    computerName: Yup.string().when('itemTypeId', {
        is: (val: number | string) => {
            try {
                return +val == 1 || +val == 2;
            } catch {
                return false;
            }
        },
        then: (schema) => schema.required('*'),
        otherwise: () => Yup.string().nullable(),
    }),
    assignedToId: Yup.number().optional().nullable(),
    cubicle_Room: Yup.string().nullable(),
    initiativeId: Yup.number().nullable(),
    serialNumber: Yup.string().nullable(),
    ipAddress: Yup.string().nullable(),
    macAddress: Yup.string().nullable(),
    cabinetOrRack: Yup.string().nullable(),
    kbmsId: Yup.string().nullable(),
    vendorId: Yup.string().nullable(),
    driverType: Yup.string().nullable(),
    sharedName: Yup.string().nullable()
})


