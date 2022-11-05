import styled from 'styled-components';

const Card = ({ children }) => {
  return <Container>{children}</Container>;
};

export default Card;

const Container = styled.div`
  width: 305px;
  height: 420px;
  border: 1px solid lightgray;
  border-radius: 10px;
`;
