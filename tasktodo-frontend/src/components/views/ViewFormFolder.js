import React from 'react';
import { StyledBackground } from '../utils/bg/StyledBackground';
import {StyledBox} from '../utils/box/StyledBox';
import FormTask from '../utils/form/FormTask';
import { useLocation } from 'react-router';

const ViewFormTask = () => {
  const location = useLocation();
  return (
    <>
      <StyledBackground>
        <StyledBox width="600px" height="300px">
            <FormTask creation={location?.state}></FormTask>
        </StyledBox>
      </StyledBackground> 
    </>
  );
};

export default ViewFormTask;
