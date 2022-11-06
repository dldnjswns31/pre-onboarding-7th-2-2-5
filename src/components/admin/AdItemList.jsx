import styled from 'styled-components';
import AdItem from './AdItem';
import ad_list from '../../db/ad_list.json';

const AdItemList = ({ filter }) => {
  const { ads } = ad_list;
  const filteredAdList = ads.filter((ad) => (filter !== undefined ? ad.status === filter : ad));

  return (
    <Body>
      {filteredAdList.map((ad) => (
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
