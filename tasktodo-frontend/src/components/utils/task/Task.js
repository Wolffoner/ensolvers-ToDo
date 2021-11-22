import React, {useState} from 'react';
import axios from 'axios';
import {Button} from '../button/Button';
import { Link } from 'react-router-dom';

const Task = ( {element = {
  id: '',
  title: '',
  description: '',
  complete: '',
  dateCreation: '',
  dateFinished: ''
 }
} ) => {

  const [task, setTask] = useState({
    id: element?.id,
    title: element?.title,
    description: element?.description,
    complete: element?.complete,
    dateCreation: element?.dateCreation,
    dateFinished: element?.dateFinished 
  });


  const changeComplete = () =>{
    const change = !task.complete;
    const today = new Date();
    const dateFinishedChange = (task.complete) ? null : `${today.getFullYear()}-${today.getMonth()+1}-${today.getDate()}`;
    setTask({...task, complete: change, dateFinished: dateFinishedChange})
  }

  const saveTask = async() =>{
    try {
      await axios.put(`http://localhost:8080/tasks/id=${task.id}`,task);
      window.location.reload();
    } catch(err) {
    }
  }

  const deleteTask = async() =>{
    try {
      await axios.delete(`http://localhost:8080/tasks/id=${task.id}`,task);
      window.location.reload();
    } catch(err) {
    }
  }

   return(
      <tr>
        <td><label><input type="checkbox" id="cbox1" checked={task?.complete} onChange={changeComplete}/></label></td>
        <td>{task?.title}</td>
        <td>{task?.description}</td>
        <td>{task?.dateCreation}</td>
        <td>{task?.dateFinished}</td>
        <td><Button onClick={saveTask} title="💾" color="#17845c"></Button></td>
        <td><Button onClick={deleteTask} title="🗑️" color="#ba1126"></Button></td>
      </tr> 
    )
  }
  
export default Task;
