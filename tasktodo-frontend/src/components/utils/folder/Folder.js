import React, {useState} from 'react';
import {Button} from '../button/Button';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useDispatch } from '../../../store/storeProvider';
import { types } from '../../../store/storeReducer';

const Folder = ( {element = {
  id: '',
  title: '',
  description: '',
 }} ) => {

  const dispatch = useDispatch();

  const [folder] = useState({
    id: element?.id,
    title: element?.title,
    description: element?.description,
  });

  const deleteFolder = async() =>{
    try {
      await axios.delete(`http://localhost:8080/folders/id=${folder.id}`);
      window.location.reload();
    } catch(err){
    }
  }

  const setFolder = () =>{
    dispatch({
      type: types?.setFolder,
      payload: folder.id});
  }

   return(
      <tr>
        <td>{folder?.title}</td>
        <td>{folder?.description}</td>
        <td><Link to='/list'><Button title="🧾" color="#17845c" onClick={setFolder}></Button></Link></td>
        <td><Button title="🗑️" color="#ba1126" onClick={deleteFolder}></Button></td>
      </tr> 
    )
  }
  
export default Folder;
