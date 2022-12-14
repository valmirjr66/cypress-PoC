import React, { useEffect, useState } from 'react';
import ReadingsListing from '../ReadingsListing';

const ReadingsListingByCategory = ({ history }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(!selectedCategory);
  }, [selectedCategory])

  useEffect(() => {
    const unlisten = history.listen(location => {
      updateVisualization(location.pathname);
    });

    const updateVisualization = (url) => {
      if (!url.includes('by-category')) {
        unlisten();
        return;
      }

      setSelectedCategory(null);

      const categoryQuery = url.split('?').pop().split('=').pop();

      window.scrollTo(0, 0);

      setSelectedCategory(categoryQuery);
    }

    const url = window.location.href;
    updateVisualization(url);

    return unlisten;
  }, [history]);

  return (<ReadingsListing category={selectedCategory} externalLoading={loading} />);
}

export default ReadingsListingByCategory;