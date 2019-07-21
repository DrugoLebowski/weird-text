// Vendor
import React, { useState } from 'react';
import styled from 'styled-components';

const Style = styled.div`
  display: flex;
  align-items: flex-start;
`;

const DecoderText = (props) => {
  const [textToDecode, setTextToDecode, ] = useState('');
  const [words, setWords, ] = useState('');
  const [originalWords, setOriginalWords ] = useState([]);
  const [decodedText, setDecodedText, ] = useState('');

  const onOriginalWordsChange = (e) => {
    if (textToDecode !== props.encodedText) {
      props.setErrorMessage('There is a mismatch among encoded text e the text to decode!');
    } else {
      props.setErrorMessage(null);
      setOriginalWords(e.target.value.split(' '));
      setDecodedText(props.decoder(textToDecode, originalWords));
    }
  }

  return (
    <Style>
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
      <div>Here the text.</div>
      <div id='decoded-text'>
        {decodedText}
      </div>
    </Style>
  );
}

export default DecoderText;
