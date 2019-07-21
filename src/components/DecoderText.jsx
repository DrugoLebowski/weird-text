// Vendor
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// Internal
import Card from './Card';

const DecoderText = ({
  encodedText,
  decoder,
  setErrorMessage,
}) => {
  const [textToDecode, setTextToDecode, ] = useState('');
  const [words, setWords, ] = useState('');
  const [originalWords, setOriginalWords ] = useState([]);
  const [decodedText, setDecodedText, ] = useState('');

  const onOriginalWordsChange = (e) => {
    if (textToDecode !== encodedText) {
      setErrorMessage('There is a mismatch among encoded text e the text to decode!');
    } else {
      const words = e.target.value;

      setErrorMessage(null);
      setWords(words);
      setOriginalWords(words.split(' '));
      setDecodedText(decoder(textToDecode, originalWords));
    }
  }

  return encodedText &&
    encodedText.length > 0 &&
    (
      <Card>
        <h2>Decoder</h2>
        <h3>Input</h3>
        <h4>Text to decode</h4>
        <textarea
          rows="5"
          value={textToDecode}
          onChange={e => setTextToDecode(e.target.value)}/>

        <h4>List of the original words that got encoded, space separated.</h4>
        <div>
          <input type="text"
            value={words}
            onChange={onOriginalWordsChange}/>
        </div>

        <h3>Output</h3>
        <h4>Decoded text</h4>
        <div id='decoded-text'>
          {decodedText}
        </div>
      </Card>
    );
}

DecoderText.propTypes = {
  encodedText: PropTypes.string,
  decoder: PropTypes.func,
  setErrorMessage: PropTypes.func,
};

export default DecoderText;
