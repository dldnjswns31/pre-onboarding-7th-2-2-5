import { AD_ADMIN_DROPDOWN_OPTIONS } from '../utils/constants';
import Dropdown from '../components/UI/Dropdown';
import Button from '../components/UI/Button';
import Card from '../components/UI/Card';
import Desc from '../components/UI/Desc';

const AdAdminPage = () => {
  return (
    <>
      <Dropdown list={AD_ADMIN_DROPDOWN_OPTIONS} />
      <Button text="수정하기" />
      <Card />
      <Desc />
    </>
  );
};

export default AdAdminPage;
