import { Outlet } from "react-router-dom";
import { NavBar } from "../../shared";

export function StoreLayout() {
  return (
    <div className="flex flex-col min-h-screen pb-10">
      <NavBar />

      <div className="flex justify-center px-10">
        <Outlet />
      </div>
    </div>
  );
}
