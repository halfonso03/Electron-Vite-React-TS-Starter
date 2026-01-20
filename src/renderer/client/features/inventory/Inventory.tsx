import { useNavigate } from 'react-router-dom';
import Button from '../../ui/Button';
import { Box } from '../../ui/Box';
import InventoryFilters from './InventoryFilters';
import InventoryList from './InventoryList';
import { useAssignees } from '../../api/hooks/useAssignees';

export default function Inventory() {
  const navigate = useNavigate();

  //   const { setItemStatusFilter, itemStatusFilter } = usePagination();

  const itemStatusFilter = '';
  const setItemStatusFilter = () => {};

  const addAss = async () => {
    window.electronAPI.addAssignee({
      firstName: 'HEctor',
      lastName: 'Alfonso',
      email: 'hialfonso@nhac.org',
      extension: '123',
      type: 1,
    });
  };

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
      <Button onClick={addAss} variation="primary">
        Add Assignees
      </Button>
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
