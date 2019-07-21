// Vendor
import styled from 'styled-components';

export default styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  & > h3 {
    margin-bottom: 1rem;

    &.title {
      margin: 1rem -2rem;
      padding: 1rem 2rem;
      background-color: ${props => props.theme.lightAccent};
    }
  }

  & > h4 {
    margin: 0 0 0.5rem 0;
  }

  & > p {
    margin-top: 0;
  }
`;
