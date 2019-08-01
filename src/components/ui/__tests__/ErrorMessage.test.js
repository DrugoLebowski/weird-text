// Vendor
import React from 'react';
import ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils';

// Internal
import ErrorMessage from '../ErrorMessage';

describe('ErrorMessage', () => {
  let container = null;

  beforeEach(() => {
    container = document.createElement('container');
    document.body.appendChild(container);
  });

  it('should not show message', () => {
    // Arrange
    const message = 'Hello world';

    act(() => {
      ReactDOM.render(
        <ErrorMessage
          message={message} />,
        container
      );
    });

    // Assert
    expect(document.querySelector('div').textContent).toEqual(message);
  });

  it('should show message', () => {
    // Arrange
    const message = null;

    act(() => {
      ReactDOM.render(
        <ErrorMessage
          message={message} />,
        container
      );
    });

    // Assert
    expect(document.querySelector('div')).toBeNull();
  });

  afterEach(() => {
    document.body.removeChild(container);
    container = null;
  });
});
