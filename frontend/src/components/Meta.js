import React from 'react';
import { Helmet } from 'react-helmet';

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keyword' content={keywords} />
    </Helmet>
  );
};

Meta.defaultProps = {
  title: 'Creamy Creations',
  description: 'We sell the best bakery items for cheap',
  keywords: 'Cakes, Pastery, Sweets, Chicken Sandwitch',
};

export default Meta;
