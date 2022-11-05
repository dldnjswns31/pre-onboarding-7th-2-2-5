import styled from 'styled-components';

const Desc = ({ isFirst, name, desc }) => {
  return (
    <Div isFirst={isFirst}>
      <Title>{name}</Title>
      <div>{desc}</div>
    </Div>
  );
};

export default Desc;

const Div = styled.div`
  border-top: ${({ isFirst }) => (isFirst ? '1px solid var(--color-lightgrey)' : 'none')};
  border-bottom: 1px solid var(--color-lightgrey);
  width: 93%;
  padding: 1rem 0;
  margin: auto;
  display: flex;
  font-size: 14px;
`;

const Title = styled.div`
  color: gray;
  width: 110px;
`;
