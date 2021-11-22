import React, {useState, useEffect} from 'react';
import { useAxios } from '../../../hooks/useAxios';
import TaskTable from '../table/TaskTable';

const TaskList = ({folderId = null}) => {

  const {response, error, loading, fetchData} = useAxios();
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetchData({method: 'GET',
    url: `http://localhost:8080/tasks/folder_id=${folderId}`,
    })
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
