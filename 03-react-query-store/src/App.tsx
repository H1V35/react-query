import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { StoreLayout } from './products/layout/StoreLayout';
import { DelayedSpinner } from './shared/components/DelayedSpinner';

export function App() {
  return (
    <StoreLayout>
      <Suspense
        fallback={
          <div className="h-10 w-full flex items-center justify-center">
            <DelayedSpinner delay={1} size="lg" />
          </div>
        }
      >
        <Outlet />
      </Suspense>
    </StoreLayout>
  );
}
