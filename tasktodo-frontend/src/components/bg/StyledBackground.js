import styled from 'styled-components';

// Styled Background
export const StyledBackground = styled.div`
  width: 100%;
  min-height: 100vh;
  height:auto;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.color ?? "#3f5b6d"};
`;