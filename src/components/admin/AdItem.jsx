import styled from 'styled-components';
import Card from '../UI/Card';
import Desc from '../UI/Desc';
import Button from '../UI/Button';
import { getValueByKey, budgetConverter, dateConverter, costFormat } from '../../utils/functions';
import { AD_ITEM_DESC, AD_STATUS, AD_SORT } from '../../utils/constants';

const AdItem = ({ ad }) => {
  const { adType, status, startDate, endDate, budget, report, title } = ad;
  const { cost, convValue, roas } = report;

  return (
    <Card>
      <Title>
        {getValueByKey(AD_SORT, adType)}_{title}
      </Title>
      <Desc isFirst name={AD_ITEM_DESC[0]} desc={getValueByKey(AD_STATUS, status)} />
      <Desc name={AD_ITEM_DESC[1]} desc={dateConverter(startDate, endDate)} />
      <Desc name={AD_ITEM_DESC[2]} desc={budgetConverter(budget)} />
      <Desc name={AD_ITEM_DESC[3]} desc={`${roas}%`} />
      <Desc name={AD_ITEM_DESC[4]} desc={costFormat(convValue)} />
      <Desc name={AD_ITEM_DESC[5]} desc={costFormat(cost)} />
      <Button text="수정하기" margin="20px 8px" />
    </Card>
  );
};

export default AdItem;

const Title = styled.div`
  font-size: 18px;
  margin: 1.5rem 10px 1.8rem 10px;
`;
