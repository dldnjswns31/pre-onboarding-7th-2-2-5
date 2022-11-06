import styled from 'styled-components';

const Desc = ({ name, desc, type, ...props }) => {
  return (
    <Div {...props}>
      <Title>{name}</Title>
      {type ? <Input type={type} defaultValue={desc} /> : <div>{desc}</div>}
    </Div>
  );
};

export default Desc;

const Div = styled.div`
  width: 93%;
  margin: auto;
  display: flex;
  font-size: 14px;
  align-items: center;
  border-top: ${({ isFirst }) => (isFirst ? '1px solid var(--color-lightgrey)' : 'none')};
  border-bottom: 1px solid var(--color-lightgrey);
  padding: ${({ editMode }) => (!editMode ? '1rem 0' : '0.85rem 0')};
`;

const Title = styled.div`
  color: gray;
  width: 110px;
`;

const Input = styled.input`
  margin: 0;
  padding: 0;
`;
