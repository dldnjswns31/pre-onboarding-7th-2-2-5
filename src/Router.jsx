import React from 'react';
import AdAdminPage from './pages/AdAdminPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/admin" element={<AdAdminPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
