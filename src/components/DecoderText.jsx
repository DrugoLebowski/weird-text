// Vendor
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// Internal
import Card from './Card';
import CardTitle from './CardTitle';
import ErrorMessage from './ErrorMessage';
import InputContainer from './InputContainer';
import OutputContainer from './OutputContainer';
import { wordsWithLengthGeqFour } from '../utils/selection-criteria';

const ExtendedCardTitle = styled(CardTitle)`
  & > h2 {
    margin: 0;
  }
`;

const DecoderText = ({
  encodedText,
  decoder,
}) => {
  const [errorMessage, setErrorMessage, ] = useState(null);
  const [textToDecode, setTextToDecode, ] = useState('');
  const [words, setWords, ] = useState('');
  const [decodedText, setDecodedText, ] = useState('');

  const onChangeCheckTextToDecode = (e) => {
    if (textToDecode !== encodedText) {
      setErrorMessage('There is a mismatch among encoded text and the text to decode!');
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
        wordsWithLengthGeqFour
      )
    );
  };

  return encodedText &&
    encodedText.length > 0 &&
    (
      <Card>
        <ExtendedCardTitle>
          <h2>Decoder</h2>
        </ExtendedCardTitle>
        {errorMessage && (
          <ErrorMessage
            message={errorMessage} />
        )}
        <InputContainer>
          <h4>Text to decode</h4>
          <textarea
            rows="5"
            value={textToDecode}
            onChange={e => setTextToDecode(e.target.value)}
            onBlur={onChangeCheckTextToDecode}/>
          {!errorMessage && (
            <>
              <h4>List of the original words that got encoded, space separated.</h4>
              <div>
                <input type="text"
                  value={words}
                  onChange={onOriginalWordsChange}/>
              </div>
            </>
          )}
        </InputContainer>
        {decodedText && decodedText.length > 0 && (
          <OutputContainer>
            <h3 className='title'>Output</h3>
            <h4>Decoded text</h4>
            <div id='decoded-text'>
              {decodedText}
            </div>
          </OutputContainer>
        )}
      </Card>
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
