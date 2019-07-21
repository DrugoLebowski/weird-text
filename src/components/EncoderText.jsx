// Vendor
import React, { useState, } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// Internal
import Card from './Card';
import CardTitle from './CardTitle';
import InputContainer from './InputContainer';
import OutputContainer from './OutputContainer';

const ExtendedCardTitle = styled(CardTitle)`
  & > h2 {
    margin: 0;
  }
`;

const ExtendedOutputContainer = styled(OutputContainer)`
  & > ul {
    margin: 0;
    padding: 0;
    display: flex;
    flex-wrap: wrap;

    & > li {
      list-style-type: none;
      background-color: ${props => props.theme.accent };
      padding: 0.5rem 1rem;
      border-radius: 0.2rem;
      margin-right: 1rem;
      margin-bottom: 1rem;
      box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.25);
    }
  }

  & .no-encoded-words {
    color: ${props => props.theme.accent };
    margin: 0;
  }
`;

const EncoderText = ({
  encoder,
  encodedText,
  setEncodedText,
}) => {
  const [originalText, setOriginalText, ] = useState('');
  const [encodedWords, setEncodedWords ] = useState([]);

  const handleAddText = (e) => {
    const currentText = e.target.value;
    const encoderResult = encoder(currentText);

    setOriginalText(currentText);
    setEncodedText(encoderResult.text);
    setEncodedWords(encoderResult.words);
  };

  return (
    <Card>
      <ExtendedCardTitle>
        <h2>Encoder</h2>
      </ExtendedCardTitle>
      <InputContainer>
        <h4>
          Text to encode
        </h4>
        <textarea
          rows="5"
          value={originalText}
          onChange={handleAddText}/>
      </InputContainer>
      {encodedText && (
        <ExtendedOutputContainer>
          <h3 className='title'>Output</h3>
          <h4>Encoded text</h4>
          {encodedText && (
            <p id="encoded-text">
              {encodedText}
            </p>
          )}

          <h4>List of the original words that got encoded</h4>
          {encodedWords.length === 0 && (
            <p className="no-encoded-words">
              No encoded words!
            </p>
          )}
          {encodedWords.length > 0 && (
            <ul>
              {encodedWords.map((word, idx) => (
                  <li key={idx}>
                    {word}
                  </li>
                )
              )}
            </ul>
          )}
        </ExtendedOutputContainer>
      )}
    </Card>
  )
};

EncoderText.propTypes = {
  encoder: PropTypes.func,
  encodedText: PropTypes.string,
  setEncodedText: PropTypes.func,
};

EncoderText.defaultProps = {
  encodedText: '',
};

export default EncoderText;
