import styled from 'styled-components';

const Desc = ({ title, name, desc, type, formHandler, ...props }) => {
  return type === 'select' ? (
    <Div {...props}>
      <Title>{title}</Title>
      <label>
        <Input onChange={formHandler} name="status" type="radio" value="active" /> 진행중
      </label>
      <label>
        <Input onChange={formHandler} name="status" type="radio" value="ended" /> 중단됨
      </label>
    </Div>
  ) : (
    <Div {...props}>
      <Title>{title}</Title>
      {type ? <Input onChange={formHandler} name={name} type={type} defaultValue={desc} /> : <div>{desc}</div>}
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

  label {
    margin-right: 15px;
  }
`;

const Title = styled.div`
  color: gray;
  width: 110px;
`;

const Input = styled.input`
  margin: 0;
  padding: 0;
`;
