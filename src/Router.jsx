import { Routes, Route } from 'react-router-dom';
import DashboardPage from './pages/DashboardPage';
import AdAdminPage from './pages/AdAdminPage';

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<DashboardPage />} />
      <Route path="/management" element={<AdAdminPage />} />
    </Routes>
  );
};

export default Router;
