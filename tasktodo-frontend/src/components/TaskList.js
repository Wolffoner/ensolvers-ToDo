import React, {useState, useEffect} from 'react';
import { useAxios } from '../hooks/useAxios';

const TaskList = () => {

  const {response, error, loading} = useAxios({
    method: 'GET',
    url: 'http://localhost:8080/tasksl',
  })
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
      setTasks(response ?? []);
  }, [response]);

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
      { loading === true 
        ? 
          <div>Loading</div>
        : (
          <div>
            <table>
              <thead>
                <tr>
                  <th>Complete</th>
                  <th>Title</th>
                  <th>Description</th>
                  <th>Date Created</th>
                  <th>Date Finished</th>
                </tr>
              </thead>
              <tbody>
                {error && (
                  <div>{error?.message}</div>
                )}
                {elements}
              </tbody>
            </table>
          </div>
        )
      }
    </>
  );
};

export default TaskList;
