// Vendor
import PropTypes from 'prop-types';
import React from 'react';

const initialState = {
  encodedText: '',
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'setEncodedText':
      return {
        ...state,
        encodedText: action.payload,
      };
    default:
      throw new Error('not recognized action in AppContext');
  }
};

const Context = React.createContext({ state: initialState, dispatch: null, });

const Provider = ({
  initialState = {},
  children,
}) => {
  const [ state, dispatch, ] = React.useReducer(reducer, initialState);

  const contextValue = {
    state: Object.assign(state, initialState),
    dispatch,
  };

  return (
    <Context.Provider value={contextValue}>
      {children}
    </Context.Provider>
  );
};

Provider.propTypes = {
  initialState: PropTypes.exact({
    encodedText: PropTypes.string,
  }),
};

const Consumer = Context.Consumer;

export default {
  Context,
  Provider,
  Consumer,
};
