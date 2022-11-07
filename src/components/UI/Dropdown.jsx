import styled from 'styled-components';
import useToggle from '../../hooks/useToggle';
import { getKeyByValue } from '../../utils/functions';
import { AD_STATUS } from '../../utils/constants';
import { useAdFilter, useAdSelector } from '../../context/adManagementContext';
import { BiChevronDown, BiChevronUp } from 'react-icons/bi';

const Dropdown = ({ list }) => {
  const [menuIsShow, menuShowHandler] = useToggle();
  const { changeFilter } = useAdFilter();
  const { selectMenu, changeSelectMenu } = useAdSelector();

  const menuSelector = (e, menu) => {
    menuShowHandler(e);
    changeSelectMenu(menu);
    changeFilter(getKeyByValue(AD_STATUS, menu));
  };

  return (
    <Div>
      <label>{selectMenu}</label>
      <Ul menuIsShow={menuIsShow}>
        {list.map((menu) => (
          <Li onClick={(e) => menuSelector(e, menu)} key={menu}>
            {menu}
          </Li>
        ))}
      </Ul>
      <span onClick={menuShowHandler}>{menuIsShow ? <BiChevronUp size="26" /> : <BiChevronDown size="26" />}</span>
    </Div>
  );
};

export default Dropdown;

const Div = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 130px;
  border: 1px solid #d1d8dc;
  border-radius: 10px;
  cursor: pointer;

  label {
    list-style: none;
    line-height: 40px;
    width: 100%;
    padding-left: 15px;
    border-radius: 10px;
    top: 100%;
    left: 0%;
  }

  span {
    position: absolute;
    top: 6px;
    left: 70%;
  }
`;

const Ul = styled.ul`
  position: absolute;
  list-style: none;
  line-height: 40px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  min-width: fit-content;
  border: 1px solid #d1d8dc;
  border-radius: 10px;
  top: 100%;
  left: 0%;
  width: 100%;
  background-color: white;
  display: ${({ menuIsShow }) => (menuIsShow ? 'hidden' : 'none')};
`;

const Li = styled.li`
  transition: background-color 0.1s ease-in;
  padding: 0.2rem 1rem;
  &:hover {
    background-color: #f1f3f5;
  }
`;
