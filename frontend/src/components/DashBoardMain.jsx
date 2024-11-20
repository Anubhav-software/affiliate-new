import React from 'react';
import { Sidebar } from './manual/Sidebar/Sidebar';
import { Dashboard } from './manual/Dashboard/DashBoard';
import { Outlet, useLocation } from 'react-router-dom'; // Import useLocation for route detection

const DashBoardMain = () => {
  const location = useLocation();

  const isCustomerPage = location.pathname.includes('/dashboard/customer');
  const isPaymentPage = location.pathname.includes('/dashboard/payment');
  const isCalendarPage = location.pathname.includes('/dashboard/calendar');

  return (
    <div className="grid gap-4 p-4 grid-cols-[220px,_1fr]">
      <Sidebar />

      <div className="bg-white rounded-lg pb-4 shadow">
        {/* Conditionally render components based on the route */}
        {isCustomerPage && <Outlet />}
        {isPaymentPage && <Outlet />}
        {isCalendarPage && <Outlet />}
        
        {/* Render default Dashboard component when no specific route matches */}
        {!isCustomerPage && !isPaymentPage && !isCalendarPage && <Dashboard />}
      </div>
    </div>
  );
};

export default DashBoardMain;
