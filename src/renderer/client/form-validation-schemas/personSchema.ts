import * as Yup from 'yup';

const personValidationRule = Yup.string().when('assigneeTypeId', {
    is: (val: number | string) => {
        return +val == 1
    },
    then: (schema) => schema.required('*'),
    otherwise: () => Yup.string().nullable(),
})

export const assigneeFormSchema = Yup.object().shape({
    assigneeTypeId: Yup.string().required('*'),
    firstName: personValidationRule,
    lastName: personValidationRule,
    email: personValidationRule,
    locationName: Yup.string().when('assigneeTypeId', {
        is: (val: number | string) => {
            return +val == 2
        },
        then: (schema) => schema.required('*'),
        otherwise: () => Yup.string().nullable(),
    }),
})

export interface AssigneeFormData {
    firstName?: string | undefined
    lastName?: string | undefined
    email?: string | undefined
    locationName?: string
}
