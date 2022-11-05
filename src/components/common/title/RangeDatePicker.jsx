import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { ko } from 'date-fns/esm/locale';
import styled from 'styled-components';
import { useEndedDate, useStartDate } from '../../../context/dateContext';

const RangeDatePicker = () => {
  const { startDate, changeStartDate } = useStartDate();
  const { endedDate, changeEndedDate } = useEndedDate();

  return (
    <>
      <DatePicker
        locale={ko}
        selected={startDate}
        dateFormat="yyyy년 MM월 dd일"
        onChange={(date) => changeStartDate(date)}
        selectsStart
        startDate={startDate}
        endDate={endedDate}
        minDate={new Date('2022-02-01')}
        className="datePicker"
      />
      <StTilde> ~ </StTilde>
      <DatePicker
        locale={ko}
        selected={endedDate}
        dateFormat="yyyy년 MM월 dd일"
        onChange={(date) => changeEndedDate(date)}
        selectsEnd
        startDate={startDate}
        endDate={endedDate}
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
