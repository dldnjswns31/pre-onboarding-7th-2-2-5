import styled from 'styled-components';
import Dropdown from '../UI/Dropdown';
import Button from '../UI/Button';
import { AD_ADMIN_DROPDOWN_OPTIONS } from '../../utils/constants';
import { useEffect, useState } from 'react';
import Loading from '../common/Loading';

const AdminLayout = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }, []);

  return (
    <Layout>
      {!isLoading ? (
        <>
          <Header>
            <Dropdown list={AD_ADMIN_DROPDOWN_OPTIONS} />
            <Button text="광고 만들기" primary />
          </Header>
          {children}
        </>
      ) : (
        <Loading />
      )}
    </Layout>
  );
};

export default AdminLayout;

const Layout = styled.div`
  margin-bottom: 40px;
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
