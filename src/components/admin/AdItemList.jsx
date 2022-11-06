import styled from 'styled-components';
import AdItem from './AdItem';
import { useAdData, useAdFilter } from '../../context/adDataContext';
import { useEffect } from 'react';

const AdItemList = ({ filter }) => {
  const ads = useAdData();
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
