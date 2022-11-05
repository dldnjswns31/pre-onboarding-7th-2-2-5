import styled from 'styled-components';

const Button = ({ text, create }) => {
  return <Btn create={create}>{text}</Btn>;
};

export default Button;

const Btn = styled.button`
  border-radius: 10px;
  padding: 0.6rem 1rem;
  font-size: 15px;
  font-weight: 700;
  border: ${({ create }) => (create ? 'none' : '1px solid lightgray')};
  color: ${({ create }) => (create ? 'white' : 'black')};
  background-color: ${({ create }) => (create ? 'var(--color-primary)' : 'transparent')};
`;
