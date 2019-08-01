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
    // Arrange
    const encodedText = 'Hello worlds';

    // Act
    act(() => {
      ReactDOM.render(
        <DecoderText
          encodedText={encodedText}
        />,
        container
      );
    });

    expect(container.innerHTML).toBeDefined();
    expect(container.innerHTML).not.toEqual('');
  });

  it('should decode test', () => {
    // Arrange
    const originalText = 'Hello woooorld to you!';
    const encodedText = 'Hlelo wolorood to you!';
    const bagOfWords = [ 'Hello', 'woooorld', ];

    act(() => {
      ReactDOM.render(
        <DecoderText
          encodedText={encodedText}
          decoder={(_) => originalText}
        />,
        container
      );
    });

    // Act
    const encodedTextTextarea = container.querySelector('#encoded-textarea');
    encodedTextTextarea.value = encodedText;
    Simulate.change(encodedTextTextarea);
    Simulate.blur(encodedTextTextarea);

    const wordsInput = container.querySelector('#input-words');
    wordsInput.value = bagOfWords.join(' ');
    Simulate.change(wordsInput);

    // Assert
    expect(container.querySelector('.error-message')).toBeNull();
    expect(container.querySelector('#decoded-text').textContent).toEqual(originalText);
  });

  it('should not decode test', () => {
    // Arrange
    const originalText = 'Hello woooorld to you!';
    const anotherWeirdText = 'Example';
    const encodedText = 'Hlelo wolorood to you!';
    const bagOfWords = [ 'Hello', 'woooorld', ];

    act(() => {
      ReactDOM.render(
        <DecoderText
          encodedText={encodedText}
          decoder={(_) => originalText}
        />,
        container
      );
    });

    // Act
    const encodedTextTextarea = container.querySelector('#encoded-textarea');
    encodedTextTextarea.value = anotherWeirdText;
    Simulate.change(encodedTextTextarea);
    Simulate.blur(encodedTextTextarea);

    // Assert
    expect(document.querySelector('.error-message')).not.toBeNull();
  });

  afterEach(() => {
    document.body.removeChild(container);
    container = null;
  });
});
