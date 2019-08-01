// Vendor
import { act } from 'react-dom/test-utils';
import React from 'react';
import ReactDOM from 'react-dom';

// Internal
import CardTitle from '../CardTitle';

describe('CardTitle', () => {
  let container = null;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  })

  it('should not render', () => {
    // Arrange
    ReactDOM.render(
      <CardTitle />,
      container,
    );

    // Assert
    expect(document.querySelector('h2').textContent).toEqual('');
  });

  it('should render', () => {
    // Arrange
    const text = '42';

    // Act
    act(() => {
      ReactDOM.render(
        <CardTitle>
          {text}
        </CardTitle>,
        container,
      );
    });

    // Assert
    expect(document.querySelector('h2').textContent).toEqual(text);
  });

  afterEach(() => {
    document.body.removeChild(container);
    container = null;
  })
})
