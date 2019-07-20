// Vendor
import React, { useState } from 'react';
import styled from 'styled-components';

// Internal
import DecoderText from './components/DecoderText';
import EncoderText from './components/EncoderText';
import ErrorMessage from './components/ErrorMessage';
import { encoder } from './utils/encoder';
import { simpleDecoder } from './utils/decoder';

const Skin = styled.div`
  display: flex;
  align-items: center;
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
        encoder={encoder}
        setEncodedText={setEncodedText}
      />
      {encodedText &&
        encodedText.length > 0 &&
        <DecoderText
          decoder={simpleDecoder}
          encodedText={encodedText}
          setErrorMessage={setErrorMessage}
        />}
    </Skin>
  )
}

export default App;
