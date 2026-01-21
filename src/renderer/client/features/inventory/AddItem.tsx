import { useNavigate } from 'react-router-dom';
import { Box } from '../../ui/Box';
import ButtonText from '../../ui/ButtonText';
// import ItemForm from './ItemForm';
// import { useItem } from '../../api/hooks/useItem';
import type { ItemFormData } from '../../form-validation-schemas/itemSchema';
import ItemForm from './ItemForm';

export default function AddItem() {
  const navigate = useNavigate();

  //   const { createItem } = useItem();

  const defaultValues: Item = {
    id: 0,
    description: '',
    hbcNumber: '',
    computerName: '',
    serialNumber: '',
    initiativeId: 0,
    assignedToId: 0,
    itemTypeId: 0,
    ipAddress: '',
    createdOn: new Date(),
    itemType: '',
    itemStatusId: 1,
    itemStatus: '',
    disposalDate: null,
  };

  function onSubmit(item: ItemFormData) {
    // createItem(item);
  }

  return (
    <>
      <Box className="text-end mb-5">
        <ButtonText onClick={() => navigate('/inventory')}>
          &larr; Back
        </ButtonText>
      </Box>
      <ItemForm item={defaultValues} submit={onSubmit}></ItemForm>
    </>
  );
}
