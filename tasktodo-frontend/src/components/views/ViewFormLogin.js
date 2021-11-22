import React from 'react';
import {StyledBox} from '../utils/box/StyledBox';
import { StyledBackground } from '../utils/bg/StyledBackground';
import FormLogin from '../utils/form/FormLogin';

// LoginPage
const ViewFormLogin = () => {

  return ( 
    <>
      <StyledBackground>
          <StyledBox width="600px" height="300px">
              <FormLogin></FormLogin>
          </StyledBox>
      </StyledBackground> 
    </>
  );
};

export default ViewFormLogin;