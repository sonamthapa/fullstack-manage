'use client';
import React, { useEffect } from 'react';
import Navbar from '@/app/(component)/Navbar';
import Sidebar from '@/app/(component)/Sidebar';
import StoreProvider, { useAppSelector } from './redux';

// specific way to connect nextjs with redux

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const isSidebarCollapse = useAppSelector(
    (state) => state.global.isSidebarCollapsed
  );
  const isDarkMode = useAppSelector((state) => state.global.isDarkMode);

  // to add class to html element
  // adding here instead of layout page
  // cuz that will make layoutpage client component
  // that canot happen in nextjs
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.add('light');
    }
  });

  return (
    <div
      className={`${
        isDarkMode ? 'dark' : 'light'
      } flex bg-gray-50 text-gray-900 w-full min-h-screen`}
    >
      <Sidebar />
      <main
        className={`flex flex-col w-full h-full py-7 px-9 bg-gray-50 ${
          isSidebarCollapse ? 'md:pl-24' : 'md:pl-72'
        }`}
      >
        <Navbar />
        {children}
      </main>
    </div>
  );
};

const DashboardWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    // we need to wrap the entire app with redux
    <StoreProvider>
      <DashboardLayout>{children}</DashboardLayout>
    </StoreProvider>
  );
};

export default DashboardWrapper;
