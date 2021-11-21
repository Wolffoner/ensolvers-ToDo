import styled from 'styled-components';

// Styled Button
export const StyledButton = styled.button`
  display: flex;
  font-size: 1.2em;
  font-family: 'Verdana';
  color: #FFFFFF;
  width: ${props => props?.width};
  height: ${props => props?.height};
  cursor: pointer;
  border-radius: 4px;
  border: none;
  background-color: ${props => props?.color};
  align-items: center;
  justify-content: center;
  margin: 10px;

  //When is hover change color
  &:hover {
    background-color: #2b303c;
  }
  // When active change color
  &:active {
    background-color: #FFFFFF;
  }`;

export default StyledButton;