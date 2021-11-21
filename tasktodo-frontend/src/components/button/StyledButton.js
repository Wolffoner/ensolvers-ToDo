import styled from 'styled-components';

// Styled Button
export const StyledButton = styled.button`
  display: flex;
  font-size: medium;
  font-family: 'Verdana';
  color: #FFFFFF;
  width: 50px;
  height: 100%;
  cursor: pointer;
  border-radius: 4px;
  border: none;
  background-color: ${props => props?.color};
  align-items: center;
  justify-content: center;

  //When is hover change color
  &:hover {
    background-color: #2b303c;
  }
  // When active change color
  &:active {
    background-color: #FFFFFF;
  }`;

export default StyledButton;