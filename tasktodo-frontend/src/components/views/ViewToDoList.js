import React from 'react';
import { StyledBackground } from '../utils/bg/StyledBackground';
import {StyledBox, StyledBodyBox, StyledHeadBox} from '../utils/box/StyledBox';
import TaskList from '../utils/taskList/TaskList';
import { Button } from '../utils/button/Button';
import {useLocation, Link} from 'react-router-dom';

const ViewToDoList = () => {

  const location = useLocation();

  return (
    <>
      <StyledBackground>
        <StyledBox>
          <StyledHeadBox>
            <h1>Task To Do</h1>
          </StyledHeadBox>
          <StyledBodyBox>
            <TaskList folderId={location?.state}/> 
          </StyledBodyBox>
          <StyledHeadBox>
            <Link to='/formTask'><Button height="50px" width="200px" title="Create Task"/></Link> 
            <Link to='/folders'><Button height="50px" width="200px"title="Go Back"/></Link> 
          </StyledHeadBox>
        </StyledBox>  
      </StyledBackground> 
    </>
  );
};

export default ViewToDoList;
