// Vendor
import PropTypes from 'prop-types';
import React from 'react';

// Internal
import AppContext from './contexts/AppContext';
import Card from './ui/Card';
import CardTitle from './ui/CardTitle';
import Column from './ui/Column';
import EncodedText from './ui/EncodedText';
import EncodedWordsList from './ui/EncodedWordsList';
import InputContainer from './ui/InputContainer';
import InputContainerTitle from './ui/InputContainerTitle';
import OutputContainer from './ui/OutputContainer';
import OutputContainerTitle from './ui/OutputContainerTitle';
import OutputContainerSubTitle from './ui/OutputContainerSubTitle';
import Row from './ui/Row';
import TextArea from './ui/TextArea';
import { wordsWithLengthGeqFour } from '../utils/selection-criterias';

const EncoderText = ({
  encoder,
}) => {
  const appContext = React.useContext(AppContext.Context);
  const [ originalText, setOriginalText, ] = React.useState('');
  const [ encodedWords, setEncodedWords ] = React.useState([]);

  const handleAddText = (e) => {
    const currentText = e.target.value;
    const encoderResult = encoder(
      currentText,
      wordsWithLengthGeqFour
    );

    appContext.dispatch({ type: 'setEncodedText', payload: encoderResult.text, });

    setOriginalText(currentText);
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
            <TextArea
              id='original-text'
              rows='5'
              value={originalText}
              onChange={handleAddText}/>
          </InputContainer>
          {appContext.state.encodedText && (
            <OutputContainer>
              <OutputContainerTitle>
                Output
              </OutputContainerTitle>
              <OutputContainerSubTitle>
                Encoded text
              </OutputContainerSubTitle>
              <EncodedText text={appContext.state.encodedText} />
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
};

export default EncoderText;
