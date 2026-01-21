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

  const addAss1 = async () => {
    const suffix = Math.round(Math.random() * 100);

    window.electronAPI.addAssignee({
      firstName: `Hector_${suffix}`,
      lastName: `Alfonso_${suffix}`,
      email: `hialfonso@Nhac.org_${suffix}`,
      extension: '123',
      type: AssigneeType.Individual,
    });
  };

  const addAss2 = async () => {
    const suffix = Math.round(Math.random() * 100);

    window.electronAPI.addAssignee({
      locationName: `DEA Desk 1_${suffix}`,
      firstName: null,
      lastName: null,
      email: null,
      extension: null,
      type: AssigneeType.Location,
    });
  };

  const addInit = async () => {
    const suffix = Math.round(Math.random() * 100);

    window.electronAPI.addInitiative({
      name: `Initiative_${suffix}`,
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
      <Button onClick={addAss1} variation="primary">
        Add Person Assignee
      </Button>
      <Button onClick={addAss2} variation="primary">
        Add Location Assignee
      </Button>
      <Button onClick={addInit} variation="primary">
        Add Initaitives
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
