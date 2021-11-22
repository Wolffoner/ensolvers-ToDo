import React from 'react';
import { StyledBackground } from './bg/StyledBackground';
import {StyledBox, StyledBodyBox, StyledHeadBox} from './box/StyledBox';
import TaskList from './TaskList';
import { Button } from './button/Button';
import {useNavigate} from 'react-router-dom';

const ViewToDoList = () => {

  const navigate = useNavigate();

  return (
    <>
      <StyledBackground>
        <StyledBox>
          <StyledHeadBox>
            <h1>Task To Do</h1>
          </StyledHeadBox>
          <StyledBodyBox>
            <TaskList/> 
          </StyledBodyBox>
          <StyledHeadBox>
            <Button height="50px" width="200px" title="Create Task" onClick={() => navigate('/formTask')}/> 
            <Button height="50px" width="200px"title="Go Back"/> 
          </StyledHeadBox>
        </StyledBox>  
      </StyledBackground> 
    </>
  );
};

export default ViewToDoList;
