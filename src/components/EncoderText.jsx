// Vendor
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// Internal
import Card from './Card';

const EncoderText = ({
  encoder,
  encodedText,
  setEncodedText,
}) => {
  const [originalText, setOriginalText, ] = useState('');
  const [encodedWords, setEncodedWords ] = useState([]);

  const handleAddText = (e) => {
    setOriginalText(e.target.value);

    const encoderResult = encoder(originalText);

    setEncodedText(encoderResult.text);
    setEncodedWords(encoderResult.words);
  }

  return (
    <Card>
      <h2>Encoder</h2>
      <h3>Input</h3>
      <h4>Text to encode</h4>
      <textarea
        rows="5"
        value={originalText}
        onChange={handleAddText}/>

      <h3>Output</h3>
      <h4>Encoded text</h4>
      {encodedText && (
        <h4 id="encoded-text">
          {encodedText}
        </h4>
      )}

      <h4>List of the original words that got encoded</h4>
      <ul>
        {encodedWords && encodedWords.map((word, idx) => (<li key={idx}>{word}</li>))}
      </ul>
    </Card>
  )
}

EncoderText.propTypes = {
  encoder: PropTypes.func,
  encodedText: PropTypes.string,
  setEncodedText: PropTypes.func,
};

export default EncoderText;
