// Vendor
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const StyledP = styled.p`
  margin-top: 0;
`;

const EncodedText = ({
  text,
}) => text && (
  <StyledP id='encoded-text'>
    {text}
  </StyledP>
);

EncodedText.propTypes = {
  text: PropTypes.string.isRequired,
};

export default EncodedText;
