import styled from 'styled-components';
import useShow from '../../hooks/useShow';
import { BiChevronDown, BiChevronUp } from 'react-icons/bi';

const Dropdown = ({ list }) => {
  const [menuIsShow, menuShowHandler] = useShow();

  return (
    <Div onClick={menuShowHandler}>
      {!menuIsShow ? <p>{list[0]}</p> : list.map((menu) => <p key={menu}>{menu}</p>)}
      <span>{menuIsShow ? <BiChevronUp size="26" /> : <BiChevronDown size="26" />}</span>
    </Div>
  );
};

export default Dropdown;

const Div = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: fit-content;
  padding: 0 1rem;
  border: 1px solid #d1d8dc;
  border-radius: 10px;
  p {
    padding-top: 4px;
    margin: 0 5px;
    list-style: none;
    line-height: 40px;
    padding: 0 1rem;
    width: 100%;
    border-radius: 10px;
    top: 100%;
    left: 0%;
  }
  p:hover {
    font-weight: bold;
  }
  span {
    position: absolute;
    top: 5px;
    left: 70%;
  }
`;
