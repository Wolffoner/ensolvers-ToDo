import React from 'react';
import StyledTable from './StyledTable';
import Task from '../task/Task';

// Table
const TaskTable = ({tasks = []}) => {

  const elements = tasks.map((task) =>{
   return(
      <Task element={task}></Task>
    )
  });

  //Render Table
  return ( 
    <>
      <StyledTable>
        <thead>
          <tr>
            <th>Complete</th>
            <th>Title</th>
            <th>Description</th>
            <th>Date Created</th>
            <th>Date Finished</th>
            <th>Modify</th>
            <th>Save</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>     
          {elements}
        </tbody>
      </StyledTable>
    </>
  );
};

export default TaskTable;