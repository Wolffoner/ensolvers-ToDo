import React, {useState, useEffect} from 'react';
import { useAxios } from '../hooks/useAxios';
import Table from './table/Table'

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
          <Table tasks={tasks}></Table>
        )
      }
    </>
  );
};

export default TaskList;
