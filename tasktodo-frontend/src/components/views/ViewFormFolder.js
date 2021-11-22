import React from 'react';
import { StyledBackground } from '../utils/bg/StyledBackground';
import {StyledBox} from '../utils/box/StyledBox';
import FormFolder from '../utils/form/FormFolder';
import { useLocation } from 'react-router';

const ViewFormFolder = () => {
  const location = useLocation();
  return (
    <>
      <StyledBackground>
        <StyledBox width="600px" height="300px">
            <FormFolder creation={location?.state}></FormFolder>
        </StyledBox>
      </StyledBackground> 
    </>
  );
};

export default ViewFormFolder;
