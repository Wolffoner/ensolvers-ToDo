import React, {useState, useEffect} from 'react';
import { useAxios } from '../../../hooks/useAxios';
import TaskTable from '../table/TaskTable';

const TaskList = ({folderId = null}) => {

  const {response, error, loading} = useAxios({
    method: 'GET',
    url: `http://localhost:8080/tasks/folder_id=${folderId}`,
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
          <TaskTable tasks={tasks} folderId={folderId}></TaskTable>
        )
      }
    </>
  );
};

export default TaskList;
