import styled from 'styled-components';
import AdItem from './AdItem';
import ad_list from '../../db/ad_list.json';

const AdItemList = () => {
  const { ads } = ad_list;

  return (
    <Body>
      {ads.map((ad) => (
        <AdItem key={ad.id} ad={ad} />
      ))}
    </Body>
  );
};

export default AdItemList;

const Body = styled.div`
  display: grid;
  place-items: center;
  grid-template-columns: repeat(auto-fill, minmax(330px, 1fr));
`;
