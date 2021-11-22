import React from 'react';
import { StyledBackground } from '../utils/bg/StyledBackground';
import {StyledBox, StyledBodyBox, StyledHeadBox} from '../utils/box/StyledBox';
import TaskList from '../utils/taskList/TaskList';
import { Button } from '../utils/button/Button';
import {useNavigate, useLocation} from 'react-router-dom';


const ViewToDoList = () => {

  const location = useLocation();
  const navigate = useNavigate();

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
            <Button height="50px" width="200px" title="Create Task" onClick={() => navigate('/formTask')}/> 
            <Button height="50px" width="200px"title="Go Back" onClick={() => navigate('/')}/> 
          </StyledHeadBox>
        </StyledBox>  
      </StyledBackground> 
    </>
  );
};

export default ViewToDoList;
