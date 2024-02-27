import { Navigate, createBrowserRouter } from 'react-router-dom';
import { App } from '../App';
import { lazyImport } from '../utils/lazyImport';

const { CompleteListPage } = lazyImport(
  () => import('../products/pages/CompleteListPage'),
  'CompleteListPage'
);
const { MensPage } = lazyImport(() => import('../products/pages/MensPage'), 'MensPage');
const { NewProduct } = lazyImport(() => import('../products/pages/NewProduct'), 'NewProduct');
const { ProductById } = lazyImport(() => import('../products/pages/ProductById'), 'ProductById');
const { WomensPage } = lazyImport(() => import('../products/pages/WomensPage'), 'WomensPage');
const { ErrorPage } = lazyImport(() => import('../ErrorPage'), 'ErrorPage');

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '',
        element: <CompleteListPage />,
      },
      {
        path: 'men',
        element: <MensPage />,
      },
      {
        path: 'women',
        element: <WomensPage />,
      },
      {
        path: 'new',
        element: <NewProduct />,
      },
      {
        path: 'product/:id',
        element: <ProductById />,
      },
      {
        path: '*',
        element: <Navigate to="." />,
      },
    ],
  },
  {},
]);
