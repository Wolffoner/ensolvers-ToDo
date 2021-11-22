import React from 'react'
import StyledButton from './StyledButton'

// Button
export const Button = ( {
  title = "",
  type = "submit",
  onClick = null,
  color = "#4d84e4",
  width = "50px",
  height = "100%"
  }) => {
  
  //Render Button
  return ( 
      <StyledButton type={type} onClick={onClick} color={color} width={width} height={height}>
        {title}
      </StyledButton>
  );
};
