// Vendor
import React, { useState } from 'react';
import styled from 'styled-components';

// Internal
import { simpleDecoder } from '../utils/decoder';

const DecoderText = (props) => {
  const [textToDecode, setTextToDecode, ] = useState('');
  const [originalWords, setOriginalWords ] = useState([]);
  const [decodedText, setDecodedText, ] = useState('');

  const onOriginalWordsChange = (e) => {
    const wordsList = e.target.value.split(' ');

    console.log(textToDecode, props.encodedText);

    if (textToDecode !== props.ncodedText) {
      props.setErrorMessage('There is a mismatch among encoded text e the text to decode!');
    } else {
      props.setErrorMessage(null);
      setOriginalWords(wordsList);
      setDecodedText(simpleDecoder(textToDecode, originalWords));
    }
  }

  return (
    <>
      <h2>Decoder</h2>
        <h3>Input</h3>
        <h4>Text to decode</h4>
        <textarea
          rows="5"
          value={textToDecode}
          onChange={e => setTextToDecode(e.target.value)}/>

        <h4>List of the original words that got encoded, space separated.</h4>
        <div>
          <input type="text" onChange={onOriginalWordsChange}/>
        </div>

        <h3>Output</h3>
        <h4>Decoded text</h4>
        <div>Here the text.</div>
        <div>{decodedText}</div>
    </>
  );
}

export default DecoderText;
