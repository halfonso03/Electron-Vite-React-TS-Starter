import { useNavigate } from 'react-router-dom';
import Button from '../../ui/Button';
import { Box } from '../../ui/Box';
import InventoryFilters from './InventoryFilters';
import InventoryList from './InventoryList';
import { usePagination } from '../../contexts/usePagination';

export default function Inventory() {
  const navigate = useNavigate();
  const { setItemStatusFilter2, itemStatusFilter } = usePagination();

  return (
    <>
      <div className=" text-end pb-4">
        <Button
          variation="primary"
          onClick={() => navigate('/inventory/new')}
          className="self-end"
        >
          Add Inventory Item
        </Button>
      </div>
      <Box className="flex">
        <InventoryFilters
          itemStatusFilter={itemStatusFilter}
          setItemStatusFilter={setItemStatusFilter2}
        ></InventoryFilters>
      </Box>
      <InventoryList></InventoryList>
    </>
  );
}
