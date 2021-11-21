import React from 'react'
import StyledButton from './StyledButton'

// Button
export const Button = ( {
  title = "",
  type = "submit",
  onClick = null,
  color = ""
  }) => {
  
  //Render Button
  return ( 
      <StyledButton type={type} onClick={onClick} color={color}>
        {title}
      </StyledButton>
  );
};
