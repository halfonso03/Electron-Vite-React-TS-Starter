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

  if (!items) return;

  return (
    <>
      <div className="w-1/4 text-gray-300 self-center mb-2 px-2">
        {/* {itemResults?.pagination?.totalCount + ' item(s) displayed.'} */}
      </div>

      <Table columns=".1fr .12fr .25fr .25fr .25fr .1fr .16fr .2fr .14fr .17fr .14fr ">
        <Table.Header>
          <Table.Cell className="font-bold">HBC #</Table.Cell>
          <Table.Cell className="font-bold">Type</Table.Cell>
          <Table.Cell className="font-bold">Serial Number</Table.Cell>
          <Table.Cell className="font-bold">Description</Table.Cell>
          <Table.Cell className="font-bold">Computer Name</Table.Cell>
          <Table.Cell className="font-bold">Initiative</Table.Cell>
          <Table.Cell className="font-bold" align="center">
            Cubicle/Room
          </Table.Cell>
          {/* <Table.Cell className="font-bold">Date Assigned</Table.Cell> */}
          <Table.Cell className="font-bold">Assigned User</Table.Cell>
          <Table.Cell className="font-bold">IP Address</Table.Cell>
          <Table.Cell className="font-bold">MAC Address</Table.Cell>
          <Table.Cell className="font-bold">Cabinet/Rack</Table.Cell>
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
