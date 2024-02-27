import { createBrowserRouter } from 'react-router-dom';
import { CompleteListPage } from '../products/pages/CompleteListPage';
import { MensPage } from '../products/pages/MensPage';
import { NewProduct } from '../products/pages/NewProduct';
import { ProductById } from '../products/pages/ProductById';
import { StoreLayout } from '../products/layout/StoreLayout';
import { WomensPage } from '../products/pages/WomensPage';
import { ErrorPage } from '../ErrorPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <StoreLayout />,
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
    ],
  },
  {},
]);
