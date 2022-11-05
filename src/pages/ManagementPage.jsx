import React from 'react';
import Title from '../components/common/Title';
import Dashboard from '../components/dashboard/Dashboard';
import Management from '../components/management/Management';

const ManagementPage = () => {
  return (
    <>
      <Title text="광고관리" />
      <Management />
    </>
  );
};

export default ManagementPage;
