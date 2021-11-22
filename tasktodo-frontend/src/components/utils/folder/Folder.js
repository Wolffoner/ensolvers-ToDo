import React, {useState} from 'react';
import {Button} from '../button/Button';

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
        <td><Button onClick="" title="Enter" color="#17845c"></Button></td>
        <td><Button onClick="" title="♻️" color="#dfe44d"></Button></td>
        <td><Button onClick="" title="🗑️" color="#ba1126"></Button></td>
      </tr> 
    )
  }
  
export default Folder;
