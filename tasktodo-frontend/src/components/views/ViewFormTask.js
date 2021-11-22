import React from 'react';
import { StyledBackground } from '../utils/bg/StyledBackground';
import {StyledBox, StyledInsideUpBox} from '../utils/box/StyledBox';
import FormTask from '../utils/form/FormTask';

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
