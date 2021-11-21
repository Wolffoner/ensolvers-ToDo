import {useState, useEffect} from 'react'; 
import axios from 'axios';

export const useAxios = (reqParams) =>{

  const [response, setResponse] = useState(undefined);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);
  
  const fetchData = async(params) =>{
    try {
      const result = await axios.request(params);
      setResponse(result?.data);
    } catch(err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData(reqParams);
  }, []);

  return{response, error, loading};
}