import { Box } from './Box';

type Props = {
  data?: PaginationData;
  setPageNumber: (pageNumber: number) => void;
};

export function Pagination({ data, setPageNumber }: Props) {
  if (!data) return;

  const pageNumbers = Array.from(
    { length: data.totalPages },
    (_, index) => index + 1
  );

  return (
    <Box className="flex gap-1 cursor-pointer ">
      {pageNumbers.map((p) => (
        <div
          key={p}
          className={p == data.currentPage ? 'page-link-active' : 'page-link'}
        >
          <div onClick={() => setPageNumber(p)} key={p} className="py-1 px-3">
            {p}
          </div>
        </div>
      ))}
    </Box>
  );
}
