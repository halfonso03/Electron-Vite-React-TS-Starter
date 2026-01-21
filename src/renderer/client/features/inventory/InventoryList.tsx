// import { usePagination } from "../../app/contexts/usePagination";
import { useInventory } from '../../api-hooks/useInventory';
import { Box } from '../../ui/Box';
import { Pagination } from '../../ui/Pagination';
import Table from '../../ui/Table';
import ItemRow from '../items/ItemRow';
import { ItemDto } from '@common/item';

export default function InventoryList() {
  const searchTerm = '';
  const itemStatusFilter = '1';

  // const { setPageNumber, itemStatusFilter, searchTerm } = usePagination();
  const { itemResults } = useInventory(itemStatusFilter);


  function onSetPageNumber(pageNumber: number) {
    // setPageNumber(pageNumber);
  }

  // if (loadingItems) return;

  // const paginationData = itemResults?.pagination;

  const items: ItemDto[] | undefined = itemResults?.items;

  console.log('items', items);
  
  if (!items) return;

  return (
    <>
      <div className="w-1/4 text-gray-300 self-center mb-2 px-2">
        {/* {itemResults?.pagination?.totalCount + ' item(s) displayed.'} */}
      </div>

      <Table columns=".1fr .12fr .25fr .25fr .25fr .1fr .16fr .2fr .14fr .17fr .14fr ">
        <Table.Header>
          <Table.Cell className="font-semibold">HBC #</Table.Cell>
          <Table.Cell className="font-semibold">Type</Table.Cell>
          <Table.Cell className="font-semibold">Serial Number</Table.Cell>
          <Table.Cell className="font-semibold">Description</Table.Cell>
          <Table.Cell className="font-semibold">Computer Name</Table.Cell>
          <Table.Cell className="font-semibold">Initiative</Table.Cell>
          <Table.Cell className="font-semibold" align="center">
            Cubicle/Room
          </Table.Cell>
          {/* <Table.Cell className="font-semibold">Date Assigned</Table.Cell> */}
          <Table.Cell className="font-semibold">Assigned User</Table.Cell>
          <Table.Cell className="font-semibold">IP Address</Table.Cell>
          <Table.Cell className="font-semibold">MAC Address</Table.Cell>
          <Table.Cell className="font-semibold">Cabinet/Rack</Table.Cell>
          {/* <Table.Cell className="font-semibold" align="center">
          Status
        </Table.Cell> */}
        </Table.Header>
        <Table.Body
          data={items}
          render={(item: ItemDto) => (
            <ItemRow
              key={item.id}
              searchTerm={searchTerm}
              item={item}
            ></ItemRow>
          )}
        ></Table.Body>
        <Table.Footer>
          <Box>
            {/* <Pagination
              data={paginationData}
              setPageNumber={onSetPageNumber}
            ></Pagination> */}
          </Box>
        </Table.Footer>
      </Table>
    </>
  );
}
