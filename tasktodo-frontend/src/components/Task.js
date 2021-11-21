import React, {useState, useEffect} from 'react';

const Task = ( element ) => {

  const [task, setTask] = useState({
    id: element?.element?.id,
    title: element?.element?.title,
    description: element?.element?.description,
    complete: element?.element?.complete,
    dateCreation: element?.element?.dateCreation,
    dateFinished: element?.element?.dateFinished 
  });

  const changeComplete = () =>{
    let change = !task.complete;
    const today = new Date();
    let dateChange = (task.complete) ? null : `${today.getFullYear()}-${today.getMonth()+1}-${today.getDate()}`;
    setTask({...task, complete: change, dateFinished: dateChange})
  }

  useEffect(() => {
    console.log(task);
  }, [task])

   return(
      <tr>
        <td><label><input type="checkbox" id="cbox1" checked={task?.complete} onChange={changeComplete}/></label></td>
        <td>{task?.title}</td>
        <td>{task?.description}</td>
        <td>{task?.dateCreation}</td>
        <td>{task?.dateFinished}</td>
        <td><button>Save</button></td>
        <td><button>Delete</button></td>
      </tr>
    )
  }
  
export default Task;
