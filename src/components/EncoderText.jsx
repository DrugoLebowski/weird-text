// Vendor
import PropTypes from 'prop-types';
import React, { useState, } from 'react';

// Internal
import Card from './ui/Card';
import CardTitle from './ui/CardTitle';
import EncodedText from './ui/EncodedText';
import InputContainer from './ui/InputContainer';
import InputContainerTitle from './ui/InputContainerTitle';
import OutputContainer from './ui/OutputContainer';
import OutputContainerTitle from './ui/OutputContainerTitle';
import OutputContainerSubTitle from './ui/OutputContainerSubTitle';
import EncodedWordsList from './ui/EncodedWordsList';
import { wordsWithLengthGeqFour } from '../utils/selection-criterias';
import Row from './ui/Row';
import Column from './ui/Column';

const EncoderText = ({
  encoder,
  encodedText,
  setEncodedText,
}) => {
  const [originalText, setOriginalText, ] = useState('');
  const [encodedWords, setEncodedWords ] = useState([]);

  const handleAddText = (e) => {
    const currentText = e.target.value;
    const encoderResult = encoder(
      currentText,
      wordsWithLengthGeqFour
    );

    setOriginalText(currentText);
    setEncodedText(encoderResult.text);
    setEncodedWords(encoderResult.words);
  };

  return (
    <Row>
      <Column
        sm={6}
        md={4}
        offsetLeftSm={3}
        offsetLeftMd={4}>
        <Card>
          <CardTitle>
            Encoder
          </CardTitle>
          <InputContainer>
            <InputContainerTitle>
              Text to encode
            </InputContainerTitle>
            <textarea
              rows="5"
              value={originalText}
              onChange={handleAddText}/>
          </InputContainer>
          {encodedText && (
            <OutputContainer>
              <OutputContainerTitle>
                Output
              </OutputContainerTitle>
              <OutputContainerSubTitle>
                Encoded text
              </OutputContainerSubTitle>
              <EncodedText
                id='encoded-text'
                text={encodedText}
              />
              <OutputContainerSubTitle>
                List of the original words that got encoded
              </OutputContainerSubTitle>
              <EncodedWordsList words={encodedWords} />
            </OutputContainer>
          )}
        </Card>
      </Column>
    </Row>
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
