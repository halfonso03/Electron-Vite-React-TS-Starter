import { useState, type ChangeEvent } from 'react';
import { Box } from '../../ui/Box';
import Button from '../../ui/Button';
import Form from '../../ui/Form';
import FormRow from '../../ui/FormRow';
import Input from '../../ui/Input';
import Select from '../../ui/Select';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, type SubmitHandler } from 'react-hook-form';
import {
  assigneeFormSchema,
  type AssigneeFormData,
} from '../../schemas/personSchema';

type Props = {
  cancelModal: () => void;
  addPerson: (data: AssigneeFormData) => void;
};

const assigneeTypes: SelectOption[] = [
  { value: '1', text: 'Individual' },
  { value: '2', text: 'Location' },
];

export default function PersonModal({ cancelModal, addPerson }: Props) {
  const [selectedAssigneeType, setSelectedAssigneeType] = useState<string>(
    assigneeTypes[0].value
  );

  const {
    handleSubmit,
    register,
    reset,
    // setValue,
    getValues,
    // trigger,
    formState: { errors },
  } = useForm({
    mode: 'onSubmit',
    resolver: yupResolver(assigneeFormSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
    },
  });

  const onSubmit: SubmitHandler<AssigneeFormData> = async (data) => {
    addPerson(data);
  };

  function onError<ItemFormData>(errors: ItemFormData | undefined) {
    console.log('validation errors', errors, getValues());
  }

  return (
    <Form
      className="flex-col w-full text-gray-50"
      type="regular"
      onSubmit={handleSubmit(onSubmit, onError)}
    >
      <FormRow id="assigneeTypeId" label="Assignee Type">
        <Select
          id="assigneeTypeId"
          options={assigneeTypes}
          type="dark"
          {...register('assigneeTypeId')}
          onChange={(e: ChangeEvent<HTMLSelectElement>) => {
            console.log('e.target.value', e.target.value.toString());
            setSelectedAssigneeType(e.target.value.toString());
          }}
        ></Select>
      </FormRow>
      {selectedAssigneeType == '1' && (
        <>
          <FormRow
            id="firstName"
            label="First Name"
            error={errors?.firstName?.message}
          >
            <Input
              id="firstName"
              {...register('firstName')}
              className={
                ' form-element ' + (errors?.firstName?.message ? ' error ' : '')
              }
            ></Input>
          </FormRow>
          <FormRow id="lastName" label="Last Name">
            <Input
              id="lastName"
              {...register('lastName')}
              className={
                ' form-element ' + (errors?.lastName?.message ? ' error ' : '')
              }
            ></Input>
          </FormRow>
          <FormRow id="email" label="Email">
            <Input
              id="email"
              {...register('email')}
              className={
                ' form-element ' + (errors?.email?.message ? ' error ' : '')
              }
            ></Input>
          </FormRow>
          <FormRow id="extension" label="Extension">
            <Input id="extension"></Input>
          </FormRow>
        </>
      )}
      {selectedAssigneeType == '2' && (
        <>
          <FormRow id="locationName" label="Description">
            <Input
              id="locationName"
              {...register('locationName')}
              className={
                ' form-element ' +
                (errors?.locationName?.message ? ' error ' : '')
              }
            ></Input>
          </FormRow>
        </>
      )}

      <FormRow label=" " id="none">
        <Box className="flex gap-2 justify-end my-2">
          <Button variation="primary" content="Save" type="submit">
            Save
          </Button>
          <Button
            variation="secondary"
            content="Cancel"
            type="button"
            onClick={() => {
              reset();
              cancelModal();
            }}
          >
            Cancel
          </Button>
        </Box>
      </FormRow>
    </Form>
  );
}
