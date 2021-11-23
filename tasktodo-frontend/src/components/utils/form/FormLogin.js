import React, {useState} from 'react';
import { Button } from '../button/Button';
import StyledForm from './StyledForm';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useDispatch } from '../../../store/storeProvider';
import { types } from "../../../store/storeReducer";

const FormLogin = () => {

  const dispatch = useDispatch();

  const [form, setForm] = useState({
    name: '',
    password: '',
  });

  // handleChange form
  const handleChange = (event) =>{
    setForm({
      ...form,
      [event.target.name]: event.target.value
    });
  }

  const saveUser = async() =>{
    try {
      const res = await axios.post(`http://localhost:8080/users`, form);
      dispatch({
        type: types?.authLogin,
        payload: res?.data});
    } catch(err) {
    }
  }
  
  return (
    <>  
      <StyledForm>
        <label>
          Name:
        </label>
          <input type="text" name="name" placeholder="Enter your name" onChange={handleChange}/>
        <label>
          Password:
        </label>
          <input type="text" name="password" placeholder="Enter your password" onChange={handleChange}/>
          <Link to='/folders'><Button height="60px" width="150px" title="Create User" onClick={saveUser}/></Link>
      </StyledForm>
    </>
  );
};

export default FormLogin;
