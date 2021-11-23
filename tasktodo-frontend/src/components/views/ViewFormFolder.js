import React from 'react';
import { StyledBackground } from '../utils/bg/StyledBackground';
import {StyledBox} from '../utils/box/StyledBox';
import FormFolder from '../utils/form/FormFolder';

const ViewFormFolder = () => {

  return (
    <>
      <StyledBackground>
        <StyledBox width="600px" height="300px">
            <FormFolder></FormFolder>
        </StyledBox>
      </StyledBackground> 
    </>
  );
};

export default ViewFormFolder;
