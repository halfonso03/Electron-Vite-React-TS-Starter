import Button from '../../ui/Button';

type Props = {
  itemStatusFilter: string;
  setItemStatusFilter: (status: string) => void;
};

export default function InventoryFilters({
  itemStatusFilter,
  setItemStatusFilter,
}: Props) {
  // const { setSearchTerm, setPageNumber } = usePagination();

  function filterButtonClick(itemStatus: string) {
    setItemStatusFilter(itemStatus);
    // setPageNumber(1);
  }

  function onSearch(searchTerm: string) {
    // setSearchTerm(searchTerm);
    // setPageNumber(1);
  }

  return (
    <div className="flex justify-between w-full my-4">
      <div className="w-1/4 text-gray-300 self-center"></div>
      <div className="w-1/2 flex justify-center gap-3">
        <Button
          variation="secondary"
          className="self-start"
          selected={itemStatusFilter === ''}
          onClick={() => filterButtonClick('')}
        >
          All
        </Button>
        <Button
          variation="secondary"
          className="self-start"
          selected={itemStatusFilter === '2'}
          onClick={() => filterButtonClick('2')}
        >
          Assigned
        </Button>
        <Button
          className="self-start"
          variation="secondary"
          selected={itemStatusFilter === '1'}
          onClick={() => filterButtonClick('1')}
        >
          Unassigned
        </Button>
        <Button
          variation="secondary"
          className="self-start"
          selected={itemStatusFilter === '3'}
          onClick={() => filterButtonClick('3')}
        >
          TDB
        </Button>
        <Button
          variation="secondary"
          className="self-start"
          selected={itemStatusFilter === '4'}
          onClick={() => filterButtonClick('4')}
        >
          Disposal
        </Button>
      </div>
      <div className="w-1/4">
        {/* <Search
					onSearch={(searchTerm: string) => onSearch(searchTerm)}
				/> */}
      </div>
    </div>
  );
}
