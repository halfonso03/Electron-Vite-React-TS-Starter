import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { router } from './client/router/route';
import { GlobalStyles } from './client/styles/GlobalStyles';
import { StrictMode } from 'react';
import "./index.css"

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const container = document.getElementById('root')!;

const root = createRoot(container);

root.render(
  <StrictMode>
    <GlobalStyles></GlobalStyles>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
);
