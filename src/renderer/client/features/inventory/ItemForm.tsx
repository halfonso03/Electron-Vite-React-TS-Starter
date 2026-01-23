import { useForm, type SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import {
  itemFormSchema,
  type ItemFormData,
} from '../../form-validation-schemas/itemSchema';
import Form from '../../ui/Form';
import FormRow from '../../ui/FormRow';
import Select from '../../ui/Select';
import Input from '../../ui/Input';
import { useEffect, useState, type ChangeEvent } from 'react';
import { formatDate } from 'date-fns';
import { Box } from '../../ui/Box';
import Button from '../../ui/Button';
import Modal from '../../components/Modal';
import type { AssigneeFormData } from '../../form-validation-schemas/assigneeSchema';
import AssigneeModal from '../assignee/AssigneeModal';
import { AddAssigneeDto, AssigneeDto, AssigneeType } from '@common/assignee';
import { ItemDto } from '@common/item';
import { ItemTypes } from '@common/itemType';

import useAssignments from '../../api-hooks/useAssignment';
import toast from 'react-hot-toast';
import { useInitiative } from '../../api-hooks/useInitiative';
import { InitiativeDto } from '@common/initiative';
import InitiativeModal from '../initiative/InitiativeModal';

enum ModalOpened {
  Assignee = 1,
  Initiative = 2,
}

type Props = {
  item?: ItemDto;
  submit: (item: ItemFormData) => void;
  toggleDisposal?: () => void;
};

export default function ItemForm({ item, submit, toggleDisposal }: Props) {
  const { assignees } = useAssignments();
  const { initiatives, createInitiative } = useInitiative();

  const { createAssignee } = useAssignments();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newAssigneeId, setNewAssigneeId] = useState(0);
  const [newInitiativeId, setNewInitiativeId] = useState(0);
  const [modalOpened, setModalOpened] = useState<ModalOpened>(
    ModalOpened.Assignee,
  );

  const assigneeOptions = assignees
    ? assignees?.map((p: AssigneeDto) => ({
        value: p.id.toString(),
        text:
          p.assigneeTypeId == AssigneeType.Individual
            ? p.lastName +
              ', ' +
              p.firstName +
              ' - ' +
              p.email +
              (p.extension ? ' - ' + p.extension : '')
            : p.locationName!,
      }))
    : [];

  const updatedPeopleOptions = [
    { value: '0', text: 'Unassigned' },
    { value: '-1', text: 'Add Assignee' },
    ...assigneeOptions,
  ];

  const initiativeOptions = [
    { value: '0', text: 'Unassigned' },
    { value: '-1', text: 'Add Initiative' },
    ...(initiatives
      ? initiatives.map((i: Initiative) => ({
          value: i.id.toString(),
          text: i.name,
        }))
      : []),
  ];

  const {
    handleSubmit,
    register,
    setValue,
    getValues,
    trigger,
    formState: { errors, touchedFields },
  } = useForm({
    mode: 'onSubmit',
    resolver: yupResolver(itemFormSchema),
    defaultValues: {
      id: item?.id,
      serialNumber: item?.serialNumber,
      description: item?.description ?? undefined,
      computerName: item?.computerName ?? undefined,
      hbcNumber: item?.hbcNumber ?? undefined,
      assignedToId: item?.assignedToId ?? 0,
      ipAddress: item?.ipAddress,
      initiativeId: item?.initiativeId ?? 0,
      cubicle_Room: item?.cubicle_Room,
      itemTypeId: item?.itemTypeId,
      macAddress: item?.macAddress,
    },
  });

  const onSubmit: SubmitHandler<ItemFormData> = async (data) => {
    if (data.assignedToId === 0) data.assignedToId = null;
    if (data.initiativeId === 0) data.initiativeId = null;

    trigger('itemTypeId');

    submit(data!);
  };

  function onError<ItemFormData>(errors: ItemFormData | undefined) {
    console.log('validation errors', errors, getValues());
  }

  const onAddPerson = async (e: AssigneeFormData) => {
    await createAssignee.mutateAsync(e, {
      onSuccess: (addedAssignee: AddAssigneeDto) => {
        toast.success('Assignee added and selected');
        setIsModalOpen(false);
        setNewAssigneeId(addedAssignee.id!);
      },
    });
  };

  const onAddInitiative = async (e: { name: string }) => {
    await createInitiative.mutateAsync(
      { name: e.name },
      {
        onSuccess: (addedInitiative: InitiativeDto) => {
          toast.success('Initiative added and selected');
          setIsModalOpen(false);
          setNewInitiativeId(addedInitiative.id!);
        },
      },
    );
  };

  useEffect(() => {
    if (item && item?.id > 0) {
      setValue('itemTypeId', item?.itemTypeId);
    }

    if (assigneeOptions?.length > 0) {
      if (newAssigneeId != 0) {
        setValue('assignedToId', newAssigneeId);
      } else if (item?.assignedToId) {
        setValue('assignedToId', item.assignedToId);
      }
    }

    if (initiativeOptions?.length > 0) {
      if (newInitiativeId != 0) {
        setValue('initiativeId', newInitiativeId);
      } else if (item?.initiativeId) {
        setValue('initiativeId', item.initiativeId);
      }
    }
  }, [
    initiativeOptions?.length,
    item,
    newAssigneeId,
    newInitiativeId,
    assigneeOptions?.length,
    setValue,
  ]);

  if (!item) return;

  return (
    <div>
      <Form
        className="flex-col w-full"
        onSubmit={handleSubmit(onSubmit, onError)}
      >
        <div className="flex w-full">
          <div className="w-1/3">
            <FormRow label="Id" id="Item Id">
              <Input
                readOnly
                value={item.id}
                {...register('id')}
                disabled
              ></Input>
            </FormRow>
            <FormRow
              label="Type"
              id="itemTypeId"
              error={errors?.itemTypeId?.message}
            >
              <Select
                {...register('itemTypeId')}
                id="itemTypeId"
                type="dark"
                options={ItemTypes}
                additionalClassnames={
                  errors?.itemTypeId?.message ? ' error' : ''
                }
                onChange={(e: ChangeEvent<HTMLSelectElement>) => {
                  const seletctedValue = e.target.value;
                  setValue('itemTypeId', seletctedValue);
                  trigger('itemTypeId');
                  if (touchedFields.computerName) {
                    trigger('computerName');
                  }
                }}
              ></Select>
            </FormRow>
            <FormRow
              label="HBC Number"
              id="hbcNumber"
              error={errors?.hbcNumber?.message}
            >
              <Input
                type="text"
                id="hbcNumber"
                defaultValue={item.hbcNumber ?? undefined}
                className={
                  ' form-element ' +
                  (errors?.hbcNumber?.message ? ' error ' : '')
                }
                {...register('hbcNumber')}
              ></Input>
            </FormRow>
            <FormRow
              label="Serial No"
              id="serialNumber"
              error={errors?.serialNumber?.message}
            >
              <Input
                type="text"
                id="serialNumber"
                defaultValue={item.serialNumber ?? undefined}
                {...register('serialNumber')}
              ></Input>
            </FormRow>
            <FormRow
              label="Description"
              id="description"
              error={errors?.description?.message}
            >
              <Input
                type="text"
                id="description"
                defaultValue={item.description ?? undefined}
                {...register('description')}
                className={
                  ' form-element ' +
                  (errors?.description?.message ? ' error ' : '')
                }
              ></Input>
            </FormRow>
            <FormRow
              label="Computer Name"
              id="computerName"
              error={errors?.computerName?.message}
            >
              <Input
                type="text"
                id="location"
                defaultValue={item.computerName ?? undefined}
                {...register('computerName')}
                className={
                  ' form-element ' +
                  (errors?.computerName?.message ? ' error ' : '')
                }
              ></Input>
            </FormRow>
            <FormRow label="IP Address" id="ipAddress">
              <Input
                type="text"
                id="ipAddress"
                defaultValue={item.ipAddress ?? undefined}
                {...register('ipAddress')}
              ></Input>
            </FormRow>
            <FormRow label="MAC Address" id="macAddress">
              <Input
                type="text"
                id="macAddress"
                defaultValue={item.macAddress ?? undefined}
                {...register('macAddress')}
              ></Input>
            </FormRow>
          </div>
          <div className="w-1/3">
            <FormRow label="Initiative" id="initiativeId">
              <Select
                {...register('initiativeId')}
                id="initiativeId"
                type="dark"
                options={initiativeOptions}
                onChange={(e: ChangeEvent<HTMLSelectElement>) => {
                  const seletctedValue = +e.target.value;
                  if (seletctedValue === -1) {
                    setIsModalOpen(true);
                    setModalOpened(ModalOpened.Initiative);
                  }
                }}
              ></Select>
            </FormRow>
            <FormRow
              label="Cubicle / Room"
              id="cubicle_Room"
              error={errors?.cubicle_Room?.message}
            >
              <Input
                type="text"
                id="cubicle_Room"
                defaultValue={item.cubicle_Room ?? undefined}
                {...register('cubicle_Room')}
              ></Input>
            </FormRow>
            <FormRow label="Assigned To" id="assignedToId">
              <Select
                {...register('assignedToId')}
                id="assignedToId"
                type="dark"
                options={updatedPeopleOptions}
                onChange={(e: ChangeEvent<HTMLSelectElement>) => {
                  const seletctedValue = +e.target.value;
                  if (seletctedValue === -1) {
                    setIsModalOpen(true);
                    setModalOpened(ModalOpened.Assignee);
                  }
                }}
              ></Select>
            </FormRow>
            <FormRow label="Cabinet/Rack" id="cabinetOrRack">
              <Input
                type="text"
                id="cabinetOrRack"
                defaultValue={item.cabinetOrRack ?? undefined}
                {...register('cabinetOrRack')}
                className={
                  ' form-element ' +
                  (errors?.cabinetOrRack?.message ? ' error ' : '')
                }
              ></Input>
            </FormRow>
            {/* <FormRow label="KBMS ID" id="kbmsId">
              <Input
                type="text"
                id="kbmsId"
                defaultValue={item.kbmsId}
                {...register('kbmsId')}
                className={
                  ' form-element ' + (errors?.kbmsId?.message ? ' error ' : '')
                }
              ></Input>
            </FormRow>
            <FormRow label="Vendor ID" id="vendorId">
              <Input
                type="text"
                id="vendorId"
                defaultValue={item.vendorId}
                {...register('vendorId')}
                className={
                  ' form-element ' +
                  (errors?.vendorId?.message ? ' error ' : '')
                }
              ></Input>
            </FormRow>
            <FormRow label="Driver Type" id="driverType">
              <Input
                type="text"
                id="driverType"
                defaultValue={item.driverType}
                {...register('driverType')}
                className={
                  ' form-element ' +
                  (errors?.driverType?.message ? ' error ' : '')
                }
              ></Input>
            </FormRow> */}
            {/* <FormRow label="Shared Name" id="sharedName">
              <Input
                type="text"
                id="sharedName"
                defaultValue={item.sharedName}
                {...register('sharedName')}
                className={
                  ' form-element ' +
                  (errors?.sharedName?.message ? ' error ' : '')
                }
              ></Input>
            </FormRow> */}
          </div>
          <div className="w-1/4 flex flex-col">
            {item.id != 0 && (
              <FormRow label="Date Added" id="dateCreated">
                <Input
                  type="text"
                  disabled={true}
                  id="dateCreated"
                  value={
                    item.created_at ? formatDate(item.created_at, 'M/d/yy') : ''
                  }
                ></Input>
              </FormRow>
            )}
            <FormRow label="Date Assigned" id="dateAssigned">
              <Input
                type="text"
                disabled={true}
                id="dateAssigned"
                value={
                  item.assignedDate
                    ? formatDate(item.assignedDate, 'M/d/yy')
                    : ''
                }
              ></Input>
            </FormRow>
            <FormRow label="Date Disposed" id="disposalDate">
              <Input
                type="text"
                disabled={true}
                id="disposalDate"
                value={
                  item.disposalDate
                    ? formatDate(item.disposalDate, 'M/d/yy')
                    : ''
                }
              ></Input>
            </FormRow>
            {item.id != 0 && (
              <FormRow label="&nbsp;" id="" style={{ marginTop: 'auto' }}>
                <Box className="w-full text-end">
                  <Button
                    variation="danger"
                    type="button"
                    className="w-15rem"
                    onClick={toggleDisposal}
                  >
                    {item.itemStatusId == 4
                      ? 'Remove from Disposal'
                      : 'Move to Disposal'}
                  </Button>
                </Box>
              </FormRow>
            )}
          </div>
        </div>

        <div className=" flex justify-between my-8 w-4/5">
          <Box className="flex gap-3">
            <Button variation="primary" children="Save" type="submit"></Button>
          </Box>
        </div>
      </Form>

      {isModalOpen && (
        <Modal
          isOpen={isModalOpen}
          onClose={() => {
            setIsModalOpen(false);
            setValue('assignedToId', 0);
          }}
          title="Add Assignee"
        >
          {modalOpened == ModalOpened.Assignee ? (
            <AssigneeModal
              addPerson={onAddPerson}
              cancelModal={() => {
                setValue('assignedToId', 0);
                setIsModalOpen(false);
              }}
            ></AssigneeModal>
          ) : (
            <InitiativeModal
              addInitiative={onAddInitiative}
              cancelModal={() => {
                setValue('initiativeId', 0);
                setIsModalOpen(false);
              }}
            ></InitiativeModal>
          )}
        </Modal>
      )}
    </div>
  );
}
