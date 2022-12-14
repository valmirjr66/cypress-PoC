import React, { useState } from 'react';
import BottomScrollListener from 'react-bottom-scroll-listener';
import ReadingsListingBody from '../../componentes/ReadingsListingBody';
import { Wrapper } from './index.style';
import NavigationBar from '../../componentes/shared/NavigationBar';
import Footer from '../../componentes/shared/Footer';
import MenuItems from '../../shared/Enums/MenuItems';

const ReadingsListing = ({ category, externalLoading }) => {
  const PAGE_SIZE = 15;

  const [allItemsLoaded, setAllItemsLoaded] = useState(false);
  const [currentPage, setCurrentPage] = useState(0)

  const bottomScrollCallback = () => {
    if (!allItemsLoaded) {
      setCurrentPage(prevState => prevState + 1);
    }
  }

  return (
    <>
      <NavigationBar activeItem={MenuItems.Home} />
      <BottomScrollListener offset={300} onBottom={bottomScrollCallback}>
        <Wrapper>
          <ReadingsListingBody
            pageSize={PAGE_SIZE}
            currentPage={currentPage}
            allItemsLoaded={allItemsLoaded}
            setAllItemsLoaded={setAllItemsLoaded}
            category={category}
            externalLoading={externalLoading}
          />
        </Wrapper>
      </BottomScrollListener>
      <Footer />
    </>
  );
}

export default ReadingsListing;