import React from 'react';
<<<<<<< HEAD
import AdAdminPage from './pages/AdAdminPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/admin" element={<AdAdminPage />} />
      </Routes>
    </BrowserRouter>
=======
import { Routes, Route } from 'react-router-dom';
import DashboardPage from './pages/DashboardPage';
import ManagementPage from './pages/ManagementPage';

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<DashboardPage />} />
      <Route path="/management" element={<ManagementPage />} />
    </Routes>
>>>>>>> c9cc9e3164cc78b65b650f9aae395d7dfa09ed84
  );
};

export default Router;
