import * as Yup from 'yup';
import { Box } from '../../ui/Box';
import Button from '../../ui/Button';
import Form from '../../ui/Form';
import FormRow from '../../ui/FormRow';
import Input from '../../ui/Input';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, type SubmitHandler } from 'react-hook-form';

type Props = {
  cancelModal: () => void;
  addInitiative: (data: { name: string }) => void;
};

export default function InitiativeModal({ cancelModal, addInitiative }: Props) {
  const {
    handleSubmit,
    register,
    reset,
    getValues,
    formState: { errors },
  } = useForm({
    mode: 'onSubmit',
    resolver: yupResolver(
      Yup.object().shape({
        name: Yup.string().nullable().required('*'),
      }),
    ),
    defaultValues: {
      name: '',
    },
  });

  const onSubmit: SubmitHandler<{ name: string }> = async (data) => {
    addInitiative(data);
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
      <FormRow id="name" label="Name" error={errors?.name?.message}>
        <Input
          id="name"
          {...register('name')}
          className={
            ' form-element ' + (errors?.name?.message ? ' error ' : '')
          }
        ></Input>
      </FormRow>

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
