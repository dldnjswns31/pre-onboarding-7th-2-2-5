import { Routes, Route } from 'react-router-dom';
import DashboardPage from './pages/DashboardPage';
import ManagementPage from './pages/ManagementPage';
import AdAdminPage from './pages/AdAdminPage';

const Router = () => {
  return (
    <Routes>
      <Route path="/admin" element={<AdAdminPage />} />
      <Route path="/" element={<DashboardPage />} />
      <Route path="/management" element={<ManagementPage />} />
    </Routes>
  );
};

export default Router;
