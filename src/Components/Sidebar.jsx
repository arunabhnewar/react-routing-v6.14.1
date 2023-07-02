import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className='drawer md:drawer-open w-[24%]'>
      <input id='my-drawer-2' type='checkbox' className='drawer-toggle' />
      <div className='drawer-content flex flex-col items-center justify-center'>
        {/* Page content here */}
        <label
          htmlFor='my-drawer-2'
          className='btn btn-primary drawer-button lg:hidden'>
          Open drawer
        </label>
      </div>
      <div className='drawer-side'>
        <label htmlFor='my-drawer-2' className='drawer-overlay'></label>
        <ul className='menu p-4 w-80 h-full bg-base-200 text-base-content '>
          {/* Sidebar content here */}
          <li>
            <Link to='dashboard'>Dashboard</Link>
          </li>
          <li>
            <Link to='products'>Products</Link>
          </li>
          <li>
            <Link to='sales'>Sales</Link>
          </li>
          <li>
            <Link to='delivery'>Delivery</Link>
          </li>
          <li>
            <Link to='reports'>Reports</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
