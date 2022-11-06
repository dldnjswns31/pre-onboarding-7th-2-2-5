import styled from 'styled-components';
import AdItem from './AdItem';
import { useAdData } from '../../context/adDataContext';

const AdItemList = ({ filter }) => {
  const ads = useAdData();
  const filteredAdList = ads?.filter((ad) => (filter !== undefined ? ad?.status === filter : ad));

  return (
    <Body>
      {filteredAdList.map((ad) => (
        <AdItem key={ad.id} ad={ad} itemId={ad.id} />
      ))}
    </Body>
  );
};

export default AdItemList;

const Body = styled.div`
  display: grid;
  place-items: center;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
`;
