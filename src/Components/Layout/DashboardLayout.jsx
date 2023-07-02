import { Outlet } from "react-router-dom";
import DashboardHeader from "../DashboardHeader";
import Sidebar from "../Sidebar";

export default function DashboardLayout() {
  return (
    <div>
      <DashboardHeader />
      <div className='flex '>
        <Sidebar />
        <Outlet />
      </div>
    </div>
  );
}
