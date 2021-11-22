import React, {useState} from 'react';
import { Button } from '../button/Button';
import StyledForm from './StyledForm';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useStore } from '../../../store/storeProvider';

const FormFolder = () => {

  const {user} = useStore();

  const [folder, setFolder] = useState({
    title: '',
    description: '',
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
      await axios.post(`http://localhost:8080/folders/user_id=${user?.id}`, folder);
    } catch(err) {
    }
  }
  
  return (
    <>  
      <StyledForm>
        <label>
          Title:
        </label>
          <input type="text" name="title" value={folder.title} placeholder="Enter your task title" onChange={handleChange}/>
        <label>
          Description:
        </label>
          <textarea name="description" value={folder.description} onChange={handleChange} placeholder="Enter your description here"></textarea>
          <Link to='/folders'><Button height="60px" width="150px" title="Create Folder" onClick={saveFolder}/></Link>
      </StyledForm>
    </>
  );
};

export default FormFolder;
