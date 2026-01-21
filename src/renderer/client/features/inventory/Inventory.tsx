import { useNavigate } from 'react-router-dom';
import Button from '../../ui/Button';
import { Box } from '../../ui/Box';
import InventoryFilters from './InventoryFilters';
import InventoryList from './InventoryList';
import { AssigneeType } from '@common/assignee';

export default function Inventory() {
  const navigate = useNavigate();

  //   const { setItemStatusFilter, itemStatusFilter } = usePagination();

  const itemStatusFilter = '';
  const setItemStatusFilter = () => {};

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
          setItemStatusFilter={setItemStatusFilter}
        ></InventoryFilters>
      </Box>
      <InventoryList></InventoryList>
    </>
  );
}
