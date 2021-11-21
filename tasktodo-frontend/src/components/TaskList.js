import React, {useState, useEffect} from 'react';
import axios from 'axios';

const TaskList = () => {

  const [ tasks, setTasks] = useState([]);
  const [ error, setError] = useState('');

  const fetchData = () => {
    axios
      .get('http://localhost:8080/tasks')
      .then((res) => {
          setTasks(res?.data);
      })
      .catch((err) => {
        setError(err);
      });
  }

  useEffect(() => {
    fetchData();
  }, [])
  
  const elements = tasks.map((task) =>{
       return(
          <tr>
              <td><label><input type="checkbox" id="cbox1" checked={task?.complete}/></label></td>
              <td>{task?.title}</td>
              <td>{task?.description}</td>
              <td>{task?.dateCreation}</td>
              <td>{task?.dateFinished}</td>
          </tr>
            )
  })
  
  return (
    <>  
      <table>
        <tr>
          <th>Complete</th>
          <th>Title</th>
          <th>Description</th>
          <th>Date Created</th>
          <th>Date Finished</th>
        </tr>
        {elements}
      </table>
    </>
  );
};

export default TaskList;
