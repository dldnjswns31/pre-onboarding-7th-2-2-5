import styled from 'styled-components';
import AdItem from './AdItem';
import { useAdData } from '../../context/adDataContext';
import { useAdFilter } from '../../context/adManagementContext';

const AdItemList = () => {
  const ads = useAdData();
  const { filter } = useAdFilter();
  const filteredAdList = ads?.filter((ad) => (filter !== undefined ? ad?.status === filter : ad));

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
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
`;
