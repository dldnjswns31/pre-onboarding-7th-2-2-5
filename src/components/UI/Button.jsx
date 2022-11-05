import styled from 'styled-components';

const Button = ({ text, ...props }) => {
  return <Btn {...props}>{text}</Btn>;
};

export default Button;

const Btn = styled.button`
  border-radius: 10px;
  padding: 0.6rem 1rem;
  font-size: 15px;
  font-weight: 700;
  height: fit-content;
  margin: ${({ margin }) => margin || ''};
  border: ${({ create }) => (create ? 'none' : '1px solid lightgray')};
  color: ${({ create }) => (create ? 'white' : 'black')};
  background-color: ${({ create }) => (create ? 'var(--color-primary)' : 'transparent')};
`;
