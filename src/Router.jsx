import React from 'react';
import { Routes, Route } from 'react-router-dom';
import DashboardPage from './pages/DashboardPage';
import ManagementPage from './pages/ManagementPage';

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<DashboardPage />} />
      <Route path="/management" element={<ManagementPage />} />
    </Routes>
  );
};

export default Router;
