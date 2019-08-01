// Vendor
import React from 'react';
import ReactDOM from 'react-dom';

// Internal
import App from '../App';

describe('App', () => {
  let container = null;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  it('should mount', () => {
    // Act
    ReactDOM.render(<App />, container);

    // Assert
    expect(container.innerHTML).toBeDefined();
    expect(container.innerHTML).not.toEqual('');
  })

  afterEach(() => {
    document.body.removeChild(container);
    container = null;
  })
});
