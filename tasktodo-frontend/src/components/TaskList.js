import React, {useState, useEffect} from 'react';
import { useAxios } from '../hooks/useAxios';
import Task from './Task';

const TaskList = () => {

  const {response, error, loading} = useAxios({
    method: 'GET',
    url: 'http://localhost:8080/tasks',
  })
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
      setTasks(response ?? []);
  }, [response]);

  const elements = tasks.map((task) =>{
   return(
      <Task element={task}></Task>
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
                  <th>Save</th>
                  <th>Delete</th>
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
