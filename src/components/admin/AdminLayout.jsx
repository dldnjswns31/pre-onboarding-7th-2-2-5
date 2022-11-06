import styled from 'styled-components';
import Dropdown from '../UI/Dropdown';
import Button from '../UI/Button';
import { AD_ADMIN_DROPDOWN_OPTIONS } from '../../utils/constants';

const AdminLayout = ({ menuSelector, menuIsShow, menuShowHandler, selectMenu, children }) => {
  return (
    <Layout>
      <Header>
        <Dropdown
          list={AD_ADMIN_DROPDOWN_OPTIONS}
          menuSelector={menuSelector}
          menuIsShow={menuIsShow}
          menuShowHandler={menuShowHandler}
          selectMenu={selectMenu}
        />
        <Button text="광고 만들기" primary />
      </Header>
      {children}
    </Layout>
  );
};

export default AdminLayout;

const Layout = styled.div`
  background-color: white;
  border-radius: 20px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
  padding: 2rem;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
`;
