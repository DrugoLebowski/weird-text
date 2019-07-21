// Vendor
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  border-radius: 0.2rem;
  color: white;
  background-color: ${props => props.theme.error };
  margin-top: 1rem;
  padding: 1rem;
`;

const ErrorMessage = ({ message }) => (
  message && (
    <Container>{message}</Container>
  )
);

ErrorMessage.propTypes = {
  message: PropTypes.string,
};

ErrorMessage.defaultProps = {
  message: null,
};

export default ErrorMessage;
