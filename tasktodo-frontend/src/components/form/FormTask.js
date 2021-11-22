import React, {useState} from 'react';
import { Button } from '../button/Button';
import { useNavigate } from 'react-router';

import StyledForm from './StyledForm';
const FormTask = () => {

  const navigate = useNavigate();

  const [task, setTask] = useState({
    title: '',
    description: '',
    dateCreation: ''
  });

  return (
    <>  
      <StyledForm>
        <label>
          Title:
        </label>
          <input type="text" name="title" />
        <label>
          Description:
        </label>
          <textarea name="description" form="usrform">Enter text here...</textarea>
          <Button height="60px" width="150px" title="Create Task" onClick={() => navigate('/')}/> 
      </StyledForm>
    </>
  );
};

export default FormTask;
