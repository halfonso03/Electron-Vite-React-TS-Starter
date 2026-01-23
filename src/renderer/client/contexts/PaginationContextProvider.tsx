import { useState, type ReactNode } from 'react';
import { PaginationContext } from './PaginationContext';

export interface PaginationContextType {
  pageNumber: number;
  itemStatusFilter: string;
  searchTerm: string;
  setPageNumber: (pageNumber: number) => void;
  setItemStatusFilter2: (itemStatus: string) => void;
  setSearchTerm: (searchTerm: string) => void;
}

interface PaginationContextProviderProps {
  children: ReactNode;
}

export const PaginationContextProvider = ({
  children,
}: PaginationContextProviderProps) => {
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [itemStatusFilter, setItemStatusFilter] = useState<string>('');
  const [searchTerm, setSearchTerm] = useState<string>('');

  function setItemStatusFilter2(itemStatus: string) {

    setItemStatusFilter(itemStatus);
  }

  const contextValue: PaginationContextType = {
    pageNumber,
    setPageNumber,
    itemStatusFilter,
    searchTerm,
    setItemStatusFilter2,
    setSearchTerm,
  };

  return (
    <PaginationContext.Provider value={contextValue}>
      {children}
    </PaginationContext.Provider>
  );
};
