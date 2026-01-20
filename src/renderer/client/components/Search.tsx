import { HiMagnifyingGlass, HiXMark } from 'react-icons/hi2';
import Input from '../ui/Input';
import React, { useRef } from 'react';
import { usePagination } from '../app/contexts/usePagination';
import Button from '../ui/Button';

type Props = {
  onSearch: (searchTerm: string) => void;
};

const Search = ({ onSearch }: Props) => {
  const searchInputRef = useRef<HTMLInputElement>(null);
  const { searchTerm, setSearchTerm } = usePagination();

  const onKeyUp = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key == 'Enter' && searchInputRef.current?.value) {
      onSearch(searchInputRef.current?.value);
    }
  };

  function clearSearch() {
    if (searchInputRef.current?.value) {
      searchInputRef.current.value = '';
    }
    setSearchTerm('');
  }

  return (
    <div className="flex w-full">
      <div className="flex mx-2">
        <HiMagnifyingGlass className="self-center opacity-50"></HiMagnifyingGlass>
      </div>

      <Input
        ref={searchInputRef}
        onKeyUp={onKeyUp}
        defaultValue={searchTerm}
        style={{
          padding: '.5rem  .5rem',
          fontSize: '1rem',
          borderRadius: '5px 0 0 5px',
        }}
        placeholder="Enter a search term and presss Enter..."
      ></Input>
      <Button
        variation="secondary"
        disabled={!searchTerm}
        onClick={clearSearch}
        style={{
          borderRadius: '0 5px 5px 0',
          borderTop: '1px solid var(--color-gray-600)',
          borderRight: '1px solid var(--color-gray-600)',
          borderBottom: '1px solid var(--color-gray-600)',
          borderLeft: '0',
        }}
      >
        <HiXMark></HiXMark>
      </Button>
    </div>
  );
};

export default Search;
