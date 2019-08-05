// Vendor
import React from 'react';
import ReactDOM from 'react-dom';
import { act, findRenderedComponentWithType, Simulate, } from 'react-dom/test-utils';

// Internal
import AppContext from '../contexts/AppContext';
import EncoderText from '../EncoderText';
import EncodedText from '../ui/EncodedText';

describe('EncoderTest', () => {
  let container = null;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  it('should encode text', () => {
    // Arrange
    const originalText = 'Hello woooorld to you!';
    const encodedText = 'Hlelo wolorood to you!';
    const encodedWords = [
      'Hello',
      'woooorld',
    ];

    act(() => {
      ReactDOM.render(
        <AppContext.Provider>
          <EncoderText
            encoder={_ => ({
              text: encodedText,
              words: encodedWords,
            })}
          />
        </AppContext.Provider>,
        container
      );
    });

    // Act
    const originalTextTextarea = document.querySelector('#original-text');
    originalTextTextarea.value = originalText;
    Simulate.change(originalTextTextarea);

    act(() => {
      ReactDOM.render(
        <AppContext.Provider>
          <EncoderText
            encoder={_ => ({
              text: encodedText,
              words: encodedWords,
            })}
          />
        </AppContext.Provider>,
        container
      );
    });

    // Arrange
    expect(document.querySelector('#encoded-text').textContent).toEqual(encodedText);
    expect(document.querySelector('#encoded-words').childNodes).toHaveLength(encodedWords.length);
  });

  it('should not encode words also with text', () => {
    // Arrange
    const textToEncode = 'he lo';

    act(() => {
      ReactDOM.render(
        <AppContext.Provider>
          <EncoderText
            encoder={_ => ({
              text: textToEncode,
              words: [],
            })}
          />
        </AppContext.Provider>,
        container
      );
    });

    // Act
    const textarea = document.querySelector('#original-text');
    textarea.value = textToEncode;
    Simulate.change(textarea);

    act(() => {
      ReactDOM.render(
        <AppContext.Provider>
          <EncoderText
            encoder={_ => ({
              text: textToEncode,
              words: [],
            })}
          />
        </AppContext.Provider>,
        container
      );
    });

    // Assert
    expect(document.querySelector('#no-encoded-words')).not.toBeNull();
  });

  afterEach(() => {
    document.body.removeChild(container);
    container = null;
  });
});
