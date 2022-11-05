import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { ko } from 'date-fns/esm/locale';
import styled from 'styled-components';

const RangeDatePicker = () => {
  const [startDate, setStartDate] = useState(new Date(new Date('2022-04-20').getTime() - 604800000));
  const [endDate, setEndDate] = useState(new Date('2022-04-20'));
  return (
    <>
      <DatePicker
        locale={ko}
        selected={startDate}
        dateFormat="yyyy년 MM월 dd일"
        onChange={(date) => setStartDate(date)}
        selectsStart
        startDate={startDate}
        endDate={endDate}
        minDate={new Date('2022-02-01')}
        className="datePicker"
      />
      <StTilde> ~ </StTilde>
      <DatePicker
        locale={ko}
        selected={endDate}
        dateFormat="yyyy년 MM월 dd일"
        onChange={(date) => setEndDate(date)}
        selectsEnd
        startDate={startDate}
        endDate={endDate}
        minDate={startDate}
        maxDate={new Date('2022-04-20')}
        className="datePicker"
      />
    </>
  );
};

export default RangeDatePicker;

const StTilde = styled.span`
  margin: 0 5px;
`;
