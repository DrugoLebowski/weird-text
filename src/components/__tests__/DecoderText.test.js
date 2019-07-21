// Vendor
import React from 'react';
import ReactDOM from 'react-dom';
import { act, Simulate } from 'react-dom/test-utils';

// Internal
import DecoderText from '../DecoderText';

describe('DecoderText', () => {
  let container = null;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  it('should mount', () => {
    act(() => {
      ReactDOM.render(<DecoderText />, container);
    });
  });

  it('should decode test', () => {
    // Arrange
    let errorMessage = 'Not null';
    const originalText = 'Hello woooorld to you!';
    const encodedText = 'Hlelo wolorood to you!';
    const bagOfWords = [ 'Hello', 'woooorld', ];

    act(() => {
      ReactDOM.render(
        <DecoderText
          encodedText={encodedText}
          decoder={(_) => originalText}
          setErrorMessage={(value) => { errorMessage = value; }}
        />,
        container
      );
    });

    // Act
    const encodedTextTextarea = container.querySelector('textarea');
    encodedTextTextarea.value = encodedText;
    Simulate.change(encodedTextTextarea);

    const wordsInput = container.querySelector('input');
    wordsInput.value = bagOfWords.join(' ');
    Simulate.change(wordsInput);

    // Assert
    expect(errorMessage).toBeNull();
    expect(container.querySelector('#decoded-text').textContent).toEqual(originalText);
  });

  it('should decode test', () => {
    // Arrange
    let errorMessage = null;
    const originalText = 'Hello woooorld to you!';
    const anotherWeirdText = 'Example';
    const encodedText = 'Hlelo wolorood to you!';
    const bagOfWords = [ 'Hello', 'woooorld', ];

    act(() => {
      ReactDOM.render(
        <DecoderText
          encodedText={encodedText}
          decoder={(_) => originalText}
          setErrorMessage={(value) => { errorMessage = value; }}
        />,
        container
      );
    });

    // Act
    const encodedTextTextarea = container.querySelector('textarea');
    encodedTextTextarea.value = anotherWeirdText;
    Simulate.change(encodedTextTextarea);

    const wordsInput = container.querySelector('input');
    wordsInput.value = bagOfWords.join(' ');
    Simulate.change(wordsInput);

    // Assert
    expect(errorMessage).not.toBeNull();
    expect(errorMessage).toEqual('There is a mismatch among encoded text e the text to decode!');
  });

  afterEach(() => {
    document.body.removeChild(container);
    container = null;
  });
});
