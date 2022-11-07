import AdItemList from '../components/admin/AdItemList';
import AdminLayout from '../components/admin/AdminLayout';
import Title from '../components/common/title/Title';

const AdAdminPage = () => {
  return (
    <>
      <Title text="광고관리" />
      <AdminLayout>
        <AdItemList />
      </AdminLayout>
    </>
  );
};

export default AdAdminPage;
