import React, {useState, useEffect} from 'react';
import { useAxios } from '../../../hooks/useAxios';
import { useStore } from '../../../store/storeProvider';
import TaskTable from '../table/TaskTable';

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
