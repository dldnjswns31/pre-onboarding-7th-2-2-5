import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import styled from 'styled-components';
import { useFirstOption, useSecondOption } from '../../context/chartOptionContext';
import { CATEGORY_COLOR, CATEGORY_NAME } from '../../data/filterCategory';

const ChartFilterOption = ({ first }) => {
  const { firstOption, changeFirstOption } = useFirstOption();
  const { secondOption, changeSecondOption } = useSecondOption();
  const [options, setOptions] = useState([]);
  console.log(firstOption, secondOption);

  useEffect(() => {
    if (first) {
      setOptions(Object.keys(CATEGORY_NAME));
    }
  }, []);

  useEffect(() => {
    if (!first) {
      setOptions(
        Object.keys(CATEGORY_NAME).filter((category) => {
          if (category !== firstOption) return category;
        })
      );
    }
  }, [firstOption]);

  useEffect(() => {
    if (first) {
      setOptions(
        Object.keys(CATEGORY_NAME).filter((category) => {
          if (category !== secondOption) return category;
        })
      );
    }
  }, [secondOption]);

  const handleChangeFilter = (e) => {
    if (first) {
      changeFirstOption(e.target.value);
    } else {
      changeSecondOption(e.target.value);
    }
  };
  return (
    <StFilterContainer>
      <StChartColorCircle color={first ? CATEGORY_COLOR[firstOption] : CATEGORY_COLOR[secondOption]} />
      <StFilter onChange={handleChangeFilter} value={first ? firstOption : secondOption}>
        {!first && <option value="none">Filter</option>}
        {first &&
          options.map((item, idx) => {
            return (
              <option key={idx} value={item}>
                {CATEGORY_NAME[item]}
              </option>
            );
          })}
        {!first &&
          options.map((item, idx) => {
            return (
              <option key={idx} value={item}>
                {CATEGORY_NAME[item]}
              </option>
            );
          })}
      </StFilter>
    </StFilterContainer>
  );
};

export default ChartFilterOption;

const StFilterContainer = styled.div`
  position: relative;
  display: inline-block;
  margin-right: 10px;
  width: 125px;
  height: 40px;
`;

const StFilter = styled.select`
  width: 100%;
  height: 100%;
  padding-left: 40px;
  padding-right: 20px;
  border: 1px solid #d1d8dc;
  border-radius: 10px;
  -webkit-appearance: none;
  -moz-appearance: none;
  background: url('./images/chevron-down.svg') no-repeat right 10px center;
`;

const StChartColorCircle = styled.div`
  position: absolute;
  top: 15px;
  left: 20px;
  display: inline-block;
  width: 10px;
  height: 10px;
  background-color: ${({ color }) => color};
  border-radius: 50%;
`;
