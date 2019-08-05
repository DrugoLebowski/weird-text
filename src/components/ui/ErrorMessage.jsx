// Vendor
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  background-color: ${props => props.theme.error };
  border-radius: 0.2rem;
  color: white;
  margin-top: 1rem;
  padding: 1rem;
`;

const ErrorMessage = ({ message }) => (
  message && (
    <Container className="error-message">
      {message}
    </Container>
  )
);

ErrorMessage.propTypes = {
  message: PropTypes.string,
};

ErrorMessage.defaultProps = {
  message: null,
};

export default ErrorMessage;
