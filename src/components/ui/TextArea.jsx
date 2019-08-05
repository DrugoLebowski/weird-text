// Vendor
import React from 'react';
import styled from 'styled-components';

const TextArea = styled.textarea`
  border-radius: 0.2rem;
  border: 1px solid ${props => props.theme.light};
  width: 100%;
`;

export default props => (<TextArea {...props} />);
