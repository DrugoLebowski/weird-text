// Vendor
import React, { useState } from 'react';
import styled from 'styled-components';

// Internal
import DecoderText from './components/DecoderText';
import EncoderText from './components/EncoderText';
import PageTitle from './components/ui/PageTitle';
import { encoder, simpleDecoder } from './utils';

const Skin = styled.div`
  display: flex;
  width: 100%;
  min-height: 100%;
  font-family: 'Verdana', sans-serif;
  background-color: ${props => props.theme.light};

  input,
  textarea {
    width: 100%;
    border-radius: 0.2rem;
    border: 1px solid ${props => props.theme.light};
  }

  input {
    line-height: 1.5rem;
  }
`;

const Root = styled.div`
  display: flex;
  width: 100%;
  height: 100%
  flex-direction: column;
  align-items: center;
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const App = () => {
  const [encodedText, setEncodedText, ] = useState('');

  return (
    <Skin>
      <Root>
        <Container>
          <PageTitle />
          <EncoderText
            encodedText={encodedText}
            encoder={encoder}
            setEncodedText={setEncodedText}
          />
          <DecoderText
            decoder={simpleDecoder}
            encodedText={encodedText}
          />
        </Container>
      </Root>
    </Skin>
  );
};

export default App;
