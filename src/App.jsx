// Vendor
import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';

// Internal
import DecoderText from './components/DecoderText';
import EncoderText from './components/EncoderText';
import ErrorMessage from './components/ErrorMessage';
import { encoder } from './utils/encoder';
import { simpleDecoder } from './utils/decoder';

const Skin = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  align-items: center;
  font-family: sans-serif;
  background-color: ${props => props.theme.light};
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;

  & > h1 {
    align-self: flex-start;
  }
`;

const theme = {
  main: '#82C0CC',
  darkerMain: '#489FB5',
  darkestMain: '#16697A',
  light: '#EDE7E3',
  accent: '#FFA62B⁣',
};

const App = () => {
  const [encodedText, setEncodedText, ] = useState('');
  const [errorMessage, setErrorMessage, ] = useState(null);

  return (
    <ThemeProvider theme={theme}>
      <Skin>
        <Container>
          <h1>WeirdText</h1>
          <ErrorMessage
            errorMessage={errorMessage} />
          <EncoderText
            encodedText={encodedText}
            encoder={encoder}
            setEncodedText={setEncodedText}
          />
          <DecoderText
            decoder={simpleDecoder}
            encodedText={encodedText}
            setErrorMessage={setErrorMessage}
          />
        </Container>
      </Skin>
    </ThemeProvider>
  );
};

export default App;
