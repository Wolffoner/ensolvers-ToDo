import React from 'react'
import StyledError from './StyledError';

// Error Component
const Error = ({error}) =>{
   
   // Render Error
   return(
      <>
        <StyledError>⚠ Error: {error} try again.</StyledError>
      </>
   );
};

export default Error;