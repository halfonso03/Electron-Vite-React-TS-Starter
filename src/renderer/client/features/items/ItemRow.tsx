import { useNavigate } from 'react-router-dom';
import Table from '../../ui/Table';
import type { SyntheticEvent } from 'react';
import SearchTermMarker from '../../components/SearchTermMarker';
import { ItemDto } from '@common/item';

type Props = {
  item: ItemDto;
  searchTerm?: string;
};

export default function ItemRow({ item, searchTerm }: Props) {
  const navigate = useNavigate();

  function gotoPerson(assignedToId: number | undefined) {
    if (!assignedToId) return;
    navigate(`/person/${assignedToId}`);
  }

  function gotoItem(id: number) {
    navigate(`/inventory/${id}`);
  }

  return (
    <Table.Row onClick={() => gotoItem(item.id)}>
      <div className="cursor-pointer">
        <SearchTermMarker
          textToFind={searchTerm || ''}
          textToDisplay={item.hbcNumber}
        ></SearchTermMarker>
      </div>
      <div className="cursor-pointer">
        <SearchTermMarker
          textToFind={searchTerm || ''}
          textToDisplay={item.itemType}
        ></SearchTermMarker>
      </div>
      <div className="cursor-pointer">
        <SearchTermMarker
          textToFind={searchTerm || ''}
          textToDisplay={item.serialNumber}
        ></SearchTermMarker>
      </div>
      <div className="cursor-pointer">
        <SearchTermMarker
          textToFind={searchTerm || ''}
          textToDisplay={item.description}
        ></SearchTermMarker>
      </div>
      <div className="cursor-pointer">
        <SearchTermMarker
          textToFind={searchTerm || ''}
          textToDisplay={item.computerName}
        ></SearchTermMarker>
      </div>
      <div className="cursor-pointer">{'item.initiative'}</div>
      <div className="cursor-pointer text-center">{item.cubicle_Room}</div>
      {/* <div className="cursor-pointer text-center">
        <div>
          {item.dateAssigned && formatDate(item.dateAssigned, 'M/d/yy')}
        </div>
      </div> */}
      <div
        className="border-gray-900 cursor-pointer"
        onClick={(e: SyntheticEvent<HTMLDivElement>) => {
          e.stopPropagation();
          gotoPerson(item.assignedToId);
        }}
      >
        {/* item.assignedTo */}
        {true && (
          <div>
            <SearchTermMarker
              textToFind={searchTerm || ''}
              textToDisplay={'item.assignedTo'}
            ></SearchTermMarker>
          </div>
        )}
      </div>
      <div className="cursor-pointer text-center">{item.ipAddress}</div>
      <div className="cursor-pointer">{item.macAddress}</div>
      <div className="cursor-pointer">{item.cabinetOrRack}</div>

      {/* <div
        className={`cursor-pointer text-center ${
          item.itemStatusId == 3 ? 'text-yellow-600' : ''
        }`}
      >
        {item.itemStatusId == 3
          ? item.itemStatus
          : item.itemStatus.substring(0, 1)}
      </div> */}
    </Table.Row>
  );
}
