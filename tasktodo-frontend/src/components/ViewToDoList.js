import React from 'react';
import { StyledBackground } from './bg/StyledBackground';
import {StyledBox, StyledInsideUpBox, StyledInsideDownBox} from './box/StyledBox';
import TaskList from './TaskList';
import { Button } from './button/Button';

const viewToDoList = () => {

  return (
    <>
      <StyledBackground>
        <StyledBox>
          <StyledInsideUpBox>
            
            <TaskList/> 
          </StyledInsideUpBox>
          <StyledInsideDownBox>
            <Button height="50px" width="200px" title="Create Task"/> 
            <Button height="50px" width="200px"title="Go Back"/> 
          </StyledInsideDownBox>
        </StyledBox>  
      </StyledBackground> 
    </>
  );
};

export default viewToDoList;
