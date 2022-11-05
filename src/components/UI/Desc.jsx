import styled from 'styled-components';

const Desc = ({ isFirst, children }) => {
  return <Div isFirst={isFirst}>{children}</Div>;
};

export default Desc;

const Div = styled.div`
  border-top: ${({ isFirst }) => (isFirst ? '1px solid var(--color-lightgrey)' : 'none')};
  border-bottom: 1px solid var(--color-lightgrey);
  width: 85%;
  padding: 0.8rem;
`;
