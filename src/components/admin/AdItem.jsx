import styled from 'styled-components';
import Card from '../UI/Card';
import Desc from '../UI/Desc';
import Button from '../UI/Button';
import useToggle from '../../hooks/useToggle';
import { useState } from 'react';
import { getValueByKey, budgetConverter, dateConverter, costFormat, roasCalc, getToday } from '../../utils/functions';
import { AD_ITEM_DESC, AD_STATUS, AD_SORT } from '../../utils/constants';
import { useAdEdit } from '../../context/adDataContext';

const AdItem = ({ ad, itemId }) => {
  const setAdData = useAdEdit();

  const { adType, report, title } = ad;
  const { cost, convValue } = report;
  const [editMode, editModeHandler] = useToggle();
  const [form, setForm] = useState(ad);

  const formHandler = (e) => {
    const { name, value } = e.target;
    if (value === 'ended') setForm({ ...form, [name]: value, endDate: getToday() });
    else if (value === 'active') setForm({ ...form, [name]: value, endDate: null });
    else setForm({ ...form, [name]: value });
  };

  const submitHandler = (e) => {
    setAdData((prev) => prev.map((data) => (data.id === form.id ? form : data)));
    editModeHandler(e);
  };

  return !editMode ? (
    <Card>
      <Title>
        {getValueByKey(AD_SORT, adType)}_{title}
      </Title>
      <Desc isFirst title={AD_ITEM_DESC[0]} desc={getValueByKey(AD_STATUS, ad.status)} />
      <Desc title={AD_ITEM_DESC[1]} desc={dateConverter(ad.startDate, ad.endDate)} />
      <Desc title={AD_ITEM_DESC[2]} desc={budgetConverter(ad.budget)} />
      <Desc title={AD_ITEM_DESC[3]} desc={`${roasCalc(convValue, cost)}%`} />
      <Desc title={AD_ITEM_DESC[4]} desc={costFormat(convValue)} />
      <Desc title={AD_ITEM_DESC[5]} desc={costFormat(cost)} />
      <Button onClick={editModeHandler} text="수정하기" margin="20px 8px" />
    </Card>
  ) : (
    <Card primary>
      <Title>
        {getValueByKey(AD_SORT, adType)}_{title}
      </Title>
      <Desc isFirst type="select" name="status" formHandler={formHandler} editMode={editMode} title={AD_ITEM_DESC[0]} />
      <Desc
        type="date"
        name="startDate"
        formHandler={formHandler}
        editMode={editMode}
        title={AD_ITEM_DESC[1]}
        desc={ad.startDate}
      />
      <Desc
        type="number"
        name="budget"
        formHandler={formHandler}
        editMode={editMode}
        title={AD_ITEM_DESC[2]}
        desc={ad.budget}
      />
      <Desc title={AD_ITEM_DESC[3]} desc={`${roasCalc(convValue, cost)}%`} />
      <Desc title={AD_ITEM_DESC[4]} desc={costFormat(convValue)} />
      <Desc title={AD_ITEM_DESC[5]} desc={costFormat(cost)} />
      <Button type="submit" onClick={submitHandler} text="수정완료" primary margin="20px 8px" />
    </Card>
  );
};

export default AdItem;

const Title = styled.div`
  font-size: 18px;
  margin: 1.2rem 10px 1.2rem 10px;
`;
