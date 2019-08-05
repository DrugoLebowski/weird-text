//  Vendor
import React from 'react';
import styled from 'styled-components';

const Input = styled.input`
  border-radius: 0.2rem;
  border: 1px solid ${props => props.theme.light};
  line-height: 1.5rem;
  width: 100%;
`;

export default props => (<Input {...props} />);
