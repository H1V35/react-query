import { Outlet } from 'react-router-dom';
import { NavBar } from '../../shared/components/NavBar';
import { ScrollToTop } from '../../shared/components/ScrollToTop';

export function StoreLayout() {
  return (
    <div className="flex flex-col min-h-screen pb-10">
      <NavBar />
      <ScrollToTop />

      <div className="flex justify-center px-10">
        <Outlet />
      </div>
    </div>
  );
}
