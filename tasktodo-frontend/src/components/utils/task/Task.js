import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Button} from '../button/Button';

const Task = ( {element = {
  id: '',
  title: '',
  description: '',
  complete: '',
  dateCreation: '',
  dateFinished: ''
 }} ) => {

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
      console.log(task);
    } catch(err) {
      console.log(`error`);
    }
  }

   return(
      <tr>
        <td><label><input type="checkbox" id="cbox1" checked={task?.complete} onChange={changeComplete}/></label></td>
        <td>{task?.title}</td>
        <td>{task?.description}</td>
        <td>{task?.dateCreation}</td>
        <td>{task?.dateFinished}</td>
        <td><Button onClick="" title="♻️" color="#dfe44d"></Button></td>
        <td><Button onClick={saveTask} title="💾" color="#17845c"></Button></td>
        <td><Button onClick="" title="🗑️" color="#ba1126"></Button></td>
      </tr> 
    )
  }
  
export default Task;
