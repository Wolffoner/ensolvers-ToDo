import React, {useState} from 'react';
import { Button } from '../button/Button';
import StyledForm from './StyledForm';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useStore } from '../../../store/storeProvider';

const FormTask = () => {

  const {user, folder} = useStore();
  const today = new Date();
  const dateCreation = `${today.getFullYear()}-${today.getMonth()+1}-${today.getDate()}`;

  const [error, setError] = useState(null);
  const [task, setTask] = useState({
    title: '',
    description: '',
    dateCreation: dateCreation,
    complete: false,
    dateFinished: null
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
      await axios.post(`http://localhost:8080/tasks/folder_id=${folder}/user_id=${user?.id}`, task);
    } catch(err) {
      setError(err);
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
          <Link to='/list'><Button height="60px" width="150px" title="Create Task" onClick={saveTask}/></Link>
      </StyledForm>
    </>
  );
};

export default FormTask;
