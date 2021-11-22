import React, {useState} from 'react';
import {Button} from '../button/Button';
import { Link } from 'react-router-dom';

const Folder = ( {element = {
  id: '',
  title: '',
  description: '',
 }} ) => {

  const [folder, setFolder] = useState({
    id: element?.id,
    title: element?.title,
    description: element?.description,
  });

   return(
      <tr>
        <td>{folder?.title}</td>
        <td>{folder?.description}</td>
        <td><Link to='/list' state={folder.id}><Button title="🧾" color="#17845c"></Button></Link></td>
        <td><Button title="🗑️" color="#ba1126"></Button></td>
      </tr> 
    )
  }
  
export default Folder;
