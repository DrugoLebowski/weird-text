// Vendor
import PropTypes from 'prop-types';
import React, { useState } from 'react';

// Internal
import Card from './ui/Card';
import CardTitle from './ui/CardTitle';
import ErrorMessage from './ui/ErrorMessage';
import InputContainer from './ui/InputContainer';
import InputContainerTitle from './ui/InputContainerTitle';
import OutputContainer from './ui/OutputContainer';
import OutputContainerTitle from './ui/OutputContainerTitle';
import OutputContainerSubTitle from './ui/OutputContainerSubTitle';
import OutputContainerParagraph from './ui/OutputContainerParagraph';
import Row from './ui/Row';
import Column from './ui/Column';
import { wordsWithLengthGeqFour } from '../utils/selection-criterias';
import searchDuck from '../utils/similarity';

const DecoderText = ({
  encodedText,
  decoder,
}) => {
  const [errorMessage, setErrorMessage, ] = useState(null);
  const [textToDecode, setTextToDecode, ] = useState('');
  const [words, setWords, ] = useState('');
  const [decodedText, setDecodedText, ] = useState('');

  const onChangeCheckTextToDecode = (e) => {
    if (textToDecode.trim() !== encodedText.trim()) {
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
        wordsWithLengthGeqFour,
        searchDuck
      )
    );
  };

  return encodedText &&
    encodedText.length > 0 &&
    (
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
              <textarea
                id='encoded-textarea'
                rows="5"
                value={textToDecode}
                onChange={e => setTextToDecode(e.target.value)}
                onBlur={onChangeCheckTextToDecode}/>
              {!errorMessage && (
                <>
                  <InputContainerTitle>
                    List of the original words that got encoded, space separated.
                  </InputContainerTitle>
                  <input 
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
    );
};

DecoderText.propTypes = {
  encodedText: PropTypes.string,
  decoder: PropTypes.func,
  setErrorMessage: PropTypes.func,
};

DecoderText.defaultProps = {
  encodedText: '',
};

export default DecoderText;
