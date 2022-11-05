import React from 'react';
import styled from 'styled-components';
import RangeDatePicker from './RangeDatePicker';

const Title = ({ text }) => {
  return (
    <StTitleContainer>
      <StTitle>{text}</StTitle>
      <StDatePickerContainer>
        <RangeDatePicker />
      </StDatePickerContainer>
    </StTitleContainer>
  );
};

export default Title;

const StTitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 80px;
`;

const StTitle = styled.span`
  color: #3a474e;
  font-size: 26px;
  font-weight: 700;
`;

const StDatePickerContainer = styled.div`
  display: flex;
  align-items: center;

  .datePicker {
    width: 100px;
    border: none;
    background-color: #f6f7f8;
  }
`;
