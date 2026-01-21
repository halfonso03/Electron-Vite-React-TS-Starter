export enum AssigneeType {
    Individual = 1,
    Location = 2,
}


export interface Assignee {
    id: number
    locationName?: string | undefined | null
    firstName?: string | undefined | null
    lastName?: string | undefined | null
    email?: string | undefined | null
    extension?: string | undefined | null
    type: AssigneeType | number,
    created_at: Date
}

export interface AddAssigneeDto {
    locationName?: string | undefined | null
    firstName?: string | undefined | null
    lastName?: string | undefined | null
    email?: string | undefined | null
    extension?: string | undefined | null
    type: AssigneeType | number
}

export interface AssigneeDto {
    id: number
    locationName?: string | undefined | null
    firstName?: string | undefined | null
    lastName?: string | undefined | null
    email?: string | undefined | null
    extension?: string | undefined | null
    type: AssigneeType | number
}
