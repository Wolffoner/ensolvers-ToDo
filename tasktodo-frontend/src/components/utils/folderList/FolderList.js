import React, {useState, useEffect} from 'react';
import { useAxios } from '../../../hooks/useAxios';
import FolderTable from '../table/FolderTable';
import { useStore } from '../../../store/storeProvider';

const FolderList = () => {

  const {user} = useStore();

  const {response, error, loading, fetchData} = useAxios();
  const [folders, setFolders] = useState([]);


  useEffect(() => {
    fetchData({method: 'GET',
    url: `http://localhost:8080/folders/user_id=${user?.id}`,
    })
    setFolders(response ?? []);
    // eslint-disable-next-line
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
