import React from 'react';
import ReactDOM from 'react-dom/client';
import { TanStackProvider } from './providers/TanStackProvider.tsx';
import { NextUIProvider } from '@nextui-org/react';
import { RouterProvider } from 'react-router-dom';
import { router } from './router/router.tsx';

import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <TanStackProvider>
      <NextUIProvider>
        <main className="dark text-foreground bg-background">
          <RouterProvider router={router} />
        </main>
      </NextUIProvider>
    </TanStackProvider>
  </React.StrictMode>
);
