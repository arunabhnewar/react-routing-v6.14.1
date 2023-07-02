import { Outlet } from "react-router-dom";
import Header from "../Header";

export default function FrontLayout() {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
}
