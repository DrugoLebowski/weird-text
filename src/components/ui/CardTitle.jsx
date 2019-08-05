// Vendor
import React from 'react';
import styled from 'styled-components';

const CardTitleWrapper = styled.div`
  background-color: ${props => props.theme.darkestMain};
  border-top-left-radius: 0.2rem;
  border-top-right-radius: 0.2rem;
  color: white;
  font-weight: bolder;
  margin: -2rem -2rem 0 -2rem;
  padding: 1rem 2rem 1rem 2rem;
`;

const CardTitleContent = styled.h2`
  margin: 0;
`;

export default ({
  children,
}) => (
  <CardTitleWrapper>
    <CardTitleContent>
      {children}
    </CardTitleContent>
  </CardTitleWrapper>
);
