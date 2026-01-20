import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { router } from './client/router/route';

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const container = document.getElementById('root')!;

const root = createRoot(container);

root.render(<RouterProvider router={router}></RouterProvider>);
