import React, { useEffect, useState } from 'react';
import { getTextsList, getTextsListByCategory } from '../../Services/readings';
import LoadingIcon from '../../shared/Images/loading.svg';
import categories from '../../shared/Util/categories';
import Skeleton from '../shared/LoadingSkeleton';
import TextCard from '../shared/TextCard';
import { Image, InnerContainer, OuterContainer, SkeletonContainer, SkeletonWrapper, Wrapper } from './index.style';

const ReadingsListingBody = ({ category, externalLoading, currentPage,
  pageSize, singleLoad, allItemsLoaded, setAllItemsLoaded, fluid }) => {

  const [listingComponent, setListingComponent] = useState(null);
  const [loadingPage, setLoadingPage] = useState(true);

  const LoadingBlock = () => {
    const skeletonsArray = [];

    for (let index = 0; index < pageSize; index++)
      skeletonsArray.push(
        <SkeletonContainer fluid={fluid} key={`skeleton-item-${index}`} data-cy="skeleton-item">
          <Skeleton height={150} />
        </SkeletonContainer>
      );

    return <SkeletonWrapper>{skeletonsArray}</SkeletonWrapper>;
  };

  useEffect(() => {
    const processListingResponse = async (data) => {
      if (data && data.length > 0) {

        const mappedData = data.map((item, index) => {
          const formattedItem = (
            <TextCard
              id={item._id}
              fluid={fluid}
              key={`portal-reading-item-${index}`}
              coverImage={item.coverImage}
              title={item.title}
              subtitle={item.subtitle}
            />
          );

          if (index % pageSize === 0) {
            setLoadingPage(false);
          }

          return formattedItem;
        });

        setListingComponent(mappedData);
      } else {
        setLoadingPage(false);

        if (!singleLoad) setAllItemsLoaded(true);
      }
    }

    if (currentPage === 0 && !singleLoad) {
      setAllItemsLoaded(false);
    }

    setLoadingPage(true);

    if (!externalLoading) {
      if (category) {
        getTextsListByCategory(category, pageSize, currentPage, response => {
          processListingResponse(response);
        }, () => { setLoadingPage(false); });
      } else {
        getTextsList(pageSize, currentPage, response => {
          processListingResponse(response);
        }, () => { setLoadingPage(false); });
      }
    }
  }, [currentPage, pageSize, setAllItemsLoaded, singleLoad, category, externalLoading, fluid]);

  return (
    <>
      {
        (loadingPage && !listingComponent) ?
          <LoadingBlock /> :
          <OuterContainer>
            <InnerContainer>
              {
                category ?
                  <Wrapper
                    style={{
                      width: '100%',
                      marginTop: 16,
                      marginBottom: 48,
                      textAlign: 'center',
                      fontFamily: 'fonte-psol',
                      color: 'var(--cor-primaria)',
                      fontSize: 32
                    }}
                  >
                    {categories.filter(item => item.value === category)[0].label}
                  </Wrapper> : null
              }
              {listingComponent}
              <Wrapper style={{
                width: '100%',
                textAlign: 'center',
                marginBottom: 40,
                display: 'flex',
                justifyContent: 'center'
              }} data-cy="loading-content-wrapper">
                {
                  (loadingPage && listingComponent) ? (
                    <>
                      <Image width={32} src={LoadingIcon} style={{ marginRight: 8 }} data-cy="loading-icon" />
                      <Wrapper style={{ alignSelf: 'center' }} data-cy="loading-message">Loading...</Wrapper>
                    </>
                  ) : null
                }
                {(!loadingPage && allItemsLoaded) ? 'Nothing else to load' : null}
              </Wrapper>
            </InnerContainer>
          </OuterContainer>
      }
    </>
  );
}

ReadingsListingBody.defaultProps = {
  currentPage: 0
}

export default ReadingsListingBody;