// Vendor
import React, { useState } from 'react';
import styled from 'styled-components';

// Internal
import DecoderText from './components/DecoderText';
import EncoderText from './components/EncoderText';
import ErrorMessage from './components/ErrorMessage';

const Skin = styled.div`
  font-family: sans-serif;
`;

const App = () => {
  const [encodedText, setEncodedText, ] = useState('');
  const [errorMessage, setErrorMessage, ] = useState(null);

  return (
    <Skin>
      <h1>WeirdText</h1>
      <ErrorMessage
        errorMessage={errorMessage} />
      <EncoderText
        encodedText={encodedText}
        setEncodedText={setEncodedText}
      />
      {encodedText &&
        encodedText.length > 0 &&
        <DecoderText
          encodedText={encodedText}
          setErrorMessage={setErrorMessage}
        />}
    </Skin>
  )
}

export default App;
