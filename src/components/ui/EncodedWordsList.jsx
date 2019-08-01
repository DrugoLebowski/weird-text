// Vendor
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const NoEncodedWords = styled.p`
  color: ${props => props.theme.accent};
  margin: 0;
`;

const WordsList = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
`;

const WordsListItem = styled.li`
  list-style-type: none;
  background-color: ${props => props.theme.accent };
  padding: 0.5rem 1rem;
  border-radius: 0.2rem;
  margin-right: 1rem;
  margin-bottom: 1rem;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.25);
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
