// Vendor
import React from 'react';

// Internal
import Row from './Row';
import Column from './Column';

const PageTitle = () => (
  <Row>
    <Column
      sm={6}
      md={4}
      offsetLeftSm={3}
      offsetLeftMd={4}>
      <h1>WeirdText</h1>
    </Column>
  </Row>
);

export default PageTitle;
