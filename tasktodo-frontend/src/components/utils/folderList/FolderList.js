import React, {useState, useEffect} from 'react';
import { useAxios } from '../../../hooks/useAxios';
import FolderTable from '../table/FolderTable';

const FolderList = ({folderId = null}) => {

  const {response, error, loading} = useAxios({
    method: 'GET',
    url: `http://localhost:8080/folders/user_id=1`,
  })
  const [folders, setFolders] = useState([]);

  useEffect(() => {
      setFolders(response ?? []);
  }, [response]);

  return (
    <>  
      { loading === true 
        ? 
          <div>Loading</div>
        : (
          <FolderTable folders={folders}></FolderTable>
        )
      }
    </>
  );
};

export default FolderList;
