import styled from 'styled-components';

const Bull = () => {
  return (
    <StContainer>
      <StSvg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="2.5"
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
      </StSvg>
    </StContainer>
  );
};

export default Bull;

const StContainer = styled.div`
  display: inline-block;
  width: 15px;
  height: 15px;
  margin-right: 10px;
`;

const StSvg = styled.svg`
  width: 100%;
  height: 100%;
  color: #ea3a4b;
`;
