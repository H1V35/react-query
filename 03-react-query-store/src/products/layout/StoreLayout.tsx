import React from 'react';
import { NavBar } from '../../shared/components/NavBar';
import { ScrollToTop } from '../../shared/components/ScrollToTop';

type StoreLayoutProps = {
  children: React.ReactNode;
};

export function StoreLayout({ children }: StoreLayoutProps) {
  return (
    <div className="flex flex-col min-h-screen pb-10">
      <NavBar />
      <ScrollToTop />

      <div className="flex justify-center px-10">{children}</div>
    </div>
  );
}
