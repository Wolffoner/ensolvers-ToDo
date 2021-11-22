import React from 'react';
import StyledTable from './StyledTable';
import Folder from '../folder/Folder';

// Table
const TaskTable = ({folders = []}) => {

  const elements = folders.map((folder) =>{
   return(
      <Folder element={folder}></Folder>
    )
  });

  //Render Table
  return ( 
    <>
      <StyledTable>
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Tasks</th>
            <th>Modify</th>
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