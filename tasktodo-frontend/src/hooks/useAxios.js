import {useState} from 'react'; 
import axios from 'axios';


export const useAxios = () =>{

  const [response, setResponse] = useState(undefined);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);
  
  const fetchData = async(reqParams) =>{
    try {
      const result = await axios.request(reqParams);
      setResponse(result?.data);
    } catch(err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  }


  return{response, error, loading, fetchData};
}