import { useNavigate } from 'react-router-dom';
import { Box } from '../../ui/Box';
import ButtonText from '../../ui/ButtonText';
import type { ItemFormData } from '../../form-validation-schemas/itemSchema';
import ItemForm from './ItemForm';
import { ItemDto } from '@common/item';
import { useItem } from '../../api-hooks/useItem';

export default function AddItem() {
  const navigate = useNavigate();

  const { createItem } = useItem();

  const defaultValues: ItemDto = {
    id: 0,
    description: undefined,
    hbcNumber: undefined,
    computerName: undefined,
    serialNumber: undefined,
    initiativeId: 0,
    assignedToId: 0,
    itemTypeId: 0,
    ipAddress: undefined,
    created_at: '',
    itemType: '',
    itemStatusId: 1,
    itemStatus: '',
    // disposalDate: null,
  };

  function onSubmit(item: ItemFormData) {
    createItem(item);
  }

  return (
    <>
      <Box className="text-end mb-5">
        <ButtonText onClick={() => navigate('/inventory')}>
          &larr; Back
        </ButtonText>
      </Box>
      <span>Add item</span>
      <ItemForm item={defaultValues} submit={onSubmit}></ItemForm>
    </>
  );
}
