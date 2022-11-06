import { useState } from 'react';
import { AD_STATUS } from '../utils/constants';
import { getKeyByValue } from '../utils/functions';
import AdItemList from '../components/admin/AdItemList';
import AdminLayout from '../components/admin/AdminLayout';
import Title from '../components/common/title/Title';
import useToggle from '../hooks/useToggle';

const AdAdminPage = () => {
  const [filter, setFilter] = useState(AD_STATUS.total);
  const [selectMenu, setSelectMenu] = useState('전체 광고');
  const [menuIsShow, menuShowHandler] = useToggle();

  const menuSelector = (e, menu) => {
    menuShowHandler(e);
    setSelectMenu(menu);
    setFilter(getKeyByValue(AD_STATUS, menu));
  };

  return (
    <>
      <Title text="광고관리" />
      <AdminLayout
        menuSelector={menuSelector}
        menuIsShow={menuIsShow}
        menuShowHandler={menuShowHandler}
        selectMenu={selectMenu}
      >
        <AdItemList filter={filter} />
      </AdminLayout>
    </>
  );
};

export default AdAdminPage;
