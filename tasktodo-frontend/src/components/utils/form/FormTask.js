import React, {useState} from 'react';
import { Button } from '../button/Button';
import StyledForm from './StyledForm';
import axios from 'axios';
import { Link } from 'react-router-dom';

const FormTask = ({
    creation = {}, 
    element = { 
      title: '',
      description: '',
      dateCreation: '',
      dateFinished: '',
      complete: false  
    }}) => {

  const today = new Date();
  const dateCreation = `${today.getFullYear()}-${today.getMonth()+1}-${today.getDate()}`;

  const [task, setTask] = useState({
    title: element?.title,
    description: element?.description,
    dateCreation: element?.dateCreation === '' ? dateCreation : element?.dateCreation,
    complete: element?.complete,
    dateFinished: element.dateFinished
  });

  // handleChange form
  const handleChange = (event) =>{
    setTask({
      ...task,
      [event.target.name]: event.target.value
  });
  console.log(task);
  }

  const saveTask = async() =>{
    try {
      await axios.post(`http://localhost:8080/tasks/folder_id=${creation?.folderId}/user_id=${creation?.userId}`, task);
      console.log(task);
    } catch(err) {
      console.log(`error`);
    }
  }
  
  return (
    <>  
      <StyledForm>
        <label>
          Title:
        </label>
          <input type="text" name="title" placeholder="Enter your task title" onChange={handleChange}/>
        <label>
          Description:
        </label>
          <textarea name="description" form="" onChange={handleChange} placeholder="Enter your description here"></textarea>
          <Link to='/list' state={creation?.folderId}><Button height="60px" width="150px" title="Create Task" onClick={saveTask}/></Link>
      </StyledForm>
    </>
  );
};

export default FormTask;
