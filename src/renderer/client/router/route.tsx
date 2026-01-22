import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Inventory from '../features/inventory/Inventory';
import AddItem from '../features/inventory/AddItem';
import UpdateItem from '../features/inventory/UpdateItem';
// import PersonDetails from '../../features/Person/PersonDetails';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '', element: <Inventory /> },
      { path: 'inventory', element: <Inventory /> },
        { path: 'inventory/new', element: <AddItem /> },
        { path: 'inventory/:id', element: <UpdateItem /> },
      //   { path: 'person/:id', element: <PersonDetails /> },
      //   {
      //     path: '/trips',
      //   { path: '/server-error', element: <ServerError /> },

      //   {
      //     path: '*',
      //     element: <Navigate replace to="/not-found" />,
      //   },
    ],
  },
]);
