// Vendor
import React from 'react';
import ReactDOM from 'react-dom';
import { act, Simulate } from 'react-dom/test-utils';

// Internal
import EncoderText from '../EncoderText';

describe('EncoderTest', () => {
  let container = null;

  beforeEach(() => {
    container = document.createElement('container');
    document.body.appendChild(container);
  });

  it('should encode text', () => {
    // Arrange
    let emittedEncodedText = null;

    const originalText = 'Hello woooorld to you!';
    const encodedText = 'Hlelo wolorood to you!';
    const encodedWords = [
      'Hello',
      'woooorld',
    ];

    act(() => {
      ReactDOM.render(
        <EncoderText
          encodedText={emittedEncodedText}
          encoder={_ => ({
            text: encodedText,
            words: encodedWords,
          })}
          setEncodedText={value => {
            emittedEncodedText = value;
          }}
        />,
        container
      );
    });

    // Act
    const originalTextTextarea = document.querySelector('textarea');
    originalTextTextarea.value = originalText;
    Simulate.change(originalTextTextarea);

    act(() => {
      ReactDOM.render(
        <EncoderText
          encodedText={emittedEncodedText}
          encoder={_ => ({
            text: encodedText,
            words: encodedWords,
          })}
          setEncodedText={value => {
            emittedEncodedText = value;
          }}
        />,
        container
      );
    });

    // Arrange
    expect(emittedEncodedText).not.toBeNull();
    expect(document.querySelector('#encoded-text').textContent).toEqual(encodedText);
    expect(document.querySelector('ul').childNodes).toHaveLength(encodedWords.length);
  });

  afterEach(() => {
    document.body.removeChild(container);
    container = null;
  });
});
