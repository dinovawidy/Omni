import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../../components/Sidebar/Sidebar';
import Navbar from '../../components/Navbar/Navbar';

const Layout = () => {
    return (
        <div className="flex h-screen bg-gray-100">
            <Sidebar />

            <div className="flex-1 flex flex-col overflow-hidden">
                <Navbar />
                <main className="flex-1 h-[calc(100%-4rem)] bg-gray-200 p-4">
                    <div className="px-6 py-8 h-full overflow-y-auto rounded-3xl bg-slate-100">
                        <Outlet />
                    </div>
                </main>
            </div>
        </div>
    );
};

export default Layout;
