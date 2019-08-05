// Vendor
import React from 'react';
import styled from 'styled-components';

// Internal
import DecoderText from './components/DecoderText';
import EncoderText from './components/EncoderText';
import PageTitle from './components/ui/PageTitle';
import { encoder, simpleDecoder } from './utils';

const Skin = styled.div`
  background-color: ${props => props.theme.light};
  display: flex;
  font-family: 'Verdana', sans-serif;
  min-height: 100%;
  width: 100%;
`;

const Root = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100%
  width: 100%;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const App = () => (
  <Skin>
    <Root>
      <Container>
        <PageTitle />
        <EncoderText encoder={encoder}/>
        <DecoderText decoder={simpleDecoder} />
      </Container>
    </Root>
  </Skin>
);

export default App;
