// Vendor
import styled from 'styled-components';

export default styled.div`
  margin: -2rem -2rem 0 -2rem;
  padding: 1rem 2rem 1rem 2rem;
  background-color: ${props => props.theme.darkestMain};
  border-top-left-radius: 0.2rem;
  border-top-right-radius: 0.2rem;
  color: white;
  font-weight: bolder;

  & > h2 {
    margin: 0;
  }
`;
