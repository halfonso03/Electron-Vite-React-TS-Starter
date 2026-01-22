import { useNavigate, useParams } from 'react-router-dom';
import { Box } from '../../ui/Box';
import ButtonText from '../../ui/ButtonText';
import ItemForm from './ItemForm';
import { useItem } from '../../api-hooks/useItem';
import toast from 'react-hot-toast';

export default function UpdateItem() {
  const params = useParams();
  const id = params!.id!;
  const navigate = useNavigate();

  const { item, updateItem, toggleDisposal } = useItem(+id);

  async function onToggleDisposal() {
    await toggleDisposal.mutateAsync(item!.id, {
      onSuccess: (result: { id: number; disposed: boolean | null }) => {
        if (result.disposed) {
          toast.success('Item moved to disposal');
        } else {
          toast.success('Item moved out of disposal');
        }
      },
    });
  }

  return (
    <>
      <Box className="text-end mb-5">
        <ButtonText onClick={() => navigate('/inventory')}>
          &larr; Back
        </ButtonText>
      </Box>
      <span>Update item</span>
      <ItemForm
        item={item}
        submit={updateItem}
        toggleDisposal={onToggleDisposal}
      ></ItemForm>
    </>
  );
}
