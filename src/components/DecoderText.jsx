// Vendor
import PropTypes from 'prop-types';
import React from 'react';

// Internal
import AppContext from './contexts/AppContext';
import Card from './ui/Card';
import CardTitle from './ui/CardTitle';
import Column from './ui/Column';
import ErrorMessage from './ui/ErrorMessage';
import Input from './ui/Input';
import InputContainer from './ui/InputContainer';
import InputContainerTitle from './ui/InputContainerTitle';
import OutputContainer from './ui/OutputContainer';
import OutputContainerParagraph from './ui/OutputContainerParagraph';
import OutputContainerSubTitle from './ui/OutputContainerSubTitle';
import OutputContainerTitle from './ui/OutputContainerTitle';
import Row from './ui/Row';
import TextArea from './ui/TextArea';

import { permutableWords } from '../utils/selection-criterias';
import searchDuck from '../utils/similarity';

const DecoderText = ({ decoder, }) => {
  const appContext = React.useContext(AppContext.Context);
  const [ errorMessage, setErrorMessage, ] = React.useState(null);
  const [ textToDecode, setTextToDecode, ] = React.useState('');
  const [ words, setWords, ] = React.useState('');
  const [ decodedText, setDecodedText, ] = React.useState('');

  const onChangeCheckTextToDecode = (e) => {
    if (textToDecode.trim() !== appContext.state.encodedText.trim()) {
      setErrorMessage('There is a mismatch among encoded text and the text to decode!');
      setDecodedText('');
      setWords('');
    } else {
      setErrorMessage(null);
    }
  };

  const onOriginalWordsChange = (e) => {
    const words = e.target.value;
    const bagOfWords = words.split(' ');

    setWords(words);
    setDecodedText(
      decoder(
        textToDecode,
        bagOfWords,
        permutableWords,
        searchDuck
      )
    );
  };

  return appContext.state.encodedText &&
    appContext.state.encodedText.length > 0 ? (
      <Row>
        <Column
          sm={6}
          md={4}
          offsetLeftSm={3}
          offsetLeftMd={4}>
          <Card>
            <CardTitle>
              Decoder
            </CardTitle>
            {errorMessage && (
              <ErrorMessage
                message={errorMessage} />
            )}
            <InputContainer>
              <InputContainerTitle>
                Text to decode
              </InputContainerTitle>
              <TextArea
                id="encoded-textarea"
                rows="5"
                value={textToDecode}
                onChange={e => setTextToDecode(e.target.value)}
                onBlur={onChangeCheckTextToDecode}/>
              {!errorMessage && (
                <>
                  <InputContainerTitle>
                    List of the original words that got encoded, space separated.
                  </InputContainerTitle>
                  <Input
                    id='input-words'
                    type="text"
                    value={words}
                    onChange={onOriginalWordsChange}/>
                </>
              )}
            </InputContainer>
            {decodedText && decodedText.length > 0 && (
              <OutputContainer>
                <OutputContainerTitle>
                  Output
                </OutputContainerTitle>
                <OutputContainerSubTitle>
                  Decoded text
                </OutputContainerSubTitle>
                <OutputContainerParagraph
                  id='decoded-text'>
                  {decodedText}
                </OutputContainerParagraph>
              </OutputContainer>
            )}
          </Card>
        </Column>
      </Row>
    ) : null;
};

DecoderText.propTypes = {
  decoder: PropTypes.func.isRequired,
};

export default DecoderText;
