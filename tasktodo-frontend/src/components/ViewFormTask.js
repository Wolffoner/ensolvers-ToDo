import React from 'react';
import { StyledBackground } from './bg/StyledBackground';
import {StyledBox, StyledInsideUpBox} from './box/StyledBox';
import FormTask from './form/FormTask';

const ViewFormTask = () => {

  return (
    <>
      <StyledBackground>
        <StyledBox width="600px" height="300px">
            <FormTask></FormTask>
        </StyledBox>
      </StyledBackground> 
    </>
  );
};

export default ViewFormTask;
