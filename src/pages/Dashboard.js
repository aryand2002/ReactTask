import React from "react";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import AnalyticsChart from "../components/Chart";

const Dashboard = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex flex-col flex-1 overflow-y-auto">
        <Topbar />
        <main className="p-4 space-y-6">
          <AnalyticsChart />
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
