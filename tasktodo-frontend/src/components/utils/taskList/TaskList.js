import React, {useState, useEffect} from 'react';
import { useAxios } from '../../../hooks/useAxios';
import { useStore } from '../../../store/storeProvider';
import TaskTable from '../table/TaskTable';
import Error from '../error/Error';

const TaskList = () => {

  const {folder} = useStore();

  const {response, error, loading, fetchData} = useAxios();
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetchData({method: 'GET',
    url: `http://localhost:8080/tasks/folder_id=${folder}`,
    })
    setTasks(response ?? []);
    // eslint-disable-next-line
  }, [response]);

  const result = error === '' ? <TaskTable tasks={tasks}></TaskTable> : <Error error={error}></Error>

  return (
    <>  
      { loading === true 
        ? 
          <div>Loading</div>
        : 
          result
      }
    </>
  );
};

export default TaskList;
