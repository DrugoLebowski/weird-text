// Vendor
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const NoEncodedWords = styled.p`
  color: ${props => props.theme.accent};
  margin: 0;
`;

const WordsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin: 0;
  padding: 0;
`;

const WordsListItem = styled.li`
  background-color: ${props => props.theme.accent };
  border-radius: 0.2rem;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.25);
  list-style-type: none;
  margin-bottom: 1rem;
  margin-right: 1rem;
  padding: 0.5rem 1rem;
`;

const EncodedWordsList = ({ words }) => (
  words.length === 0 ? (
    <NoEncodedWords
      id='no-encoded-words'>
      No encoded words!
    </NoEncodedWords>
  ) : (
    <WordsList
      id='encoded-words'>
      {words.map((word, idx) => (
        <WordsListItem key={idx}>
          {word}
        </WordsListItem>
      ))}
    </WordsList>
  )
);

EncodedWordsList.propTypes = {
  words: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default EncodedWordsList;
