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
    }}) => {

  const [folder, setFolder] = useState({
    title: element?.title,
    description: element?.description,
  });

  // handleChange form
  const handleChange = (event) =>{
    setFolder({
      ...folder,
      [event.target.name]: event.target.value
    });
  }

  const saveFolder = async() =>{
    try {
      await axios.post(`http://localhost:8080/folders/user_id=${creation?.userId}`, folder);
    } catch(err) {
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
          <Link to='/list' state={creation?.userId}><Button height="60px" width="150px" title="Create Task" onClick={saveFolder}/></Link>
      </StyledForm>
    </>
  );
};

export default FormTask;
