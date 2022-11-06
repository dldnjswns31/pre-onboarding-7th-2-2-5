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
  border: ${({ primary }) => (primary ? 'none' : '1px solid lightgray')};
  color: ${({ primary }) => (primary ? 'white' : 'black')};
  background-color: ${({ primary }) => (primary ? 'var(--color-primary)' : 'transparent')};
`;
