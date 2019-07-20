// Vendor
import React, { useState } from 'react';
import styled from 'styled-components';

// Internal
import { encoder } from '../utils/encoder';

const EncoderText = (props) => {
  const [originalText, setOriginalText, ] = useState('');
  const [encodedWords, setEncodedWords ] = useState([]);

  const handleAddText = (e) => {
    setOriginalText(e.target.value);

    const encoderResult = encoder(originalText);

    props.setEncodedText(encoderResult.text);
    setEncodedWords(encoderResult.words);
  }

  return (
    <>
      <h2>Encoder</h2>
      <h3>Input</h3>
      <h4>Text to encode</h4>
      <textarea
        rows="5"
        value={originalText}
        onChange={handleAddText}/>

      <h3>Output</h3>
      <h4>Encoded text</h4>
      <div>Here the text.</div>
      <h4>{props.encodedText}</h4>

      <h4>List of the original words that got encoded</h4>
      <div>Here the list.</div>
      <ul>
        {encodedWords && encodedWords.map((word, idx) => (<li key={idx}>{word}</li>))}
      </ul>
    </>
  )
}

export default EncoderText;
