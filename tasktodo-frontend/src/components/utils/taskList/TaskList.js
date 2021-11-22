import React, {useState, useEffect} from 'react';
import { useAxios } from '../../../hooks/useAxios';
import TaskTable from '../table/TaskTable';

const TaskList = (folder) => {

  const {response, error, loading} = useAxios({
    method: 'GET',
    url: 'http://localhost:8080/tasks',
  })
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
      setTasks(response ?? []);
  }, [response]);

  return (
    <>  
      { loading === true 
        ? 
          <div>Loading</div>
        : (
          <TaskTable tasks={tasks}></TaskTable>
        )
      }
    </>
  );
};

export default TaskList;