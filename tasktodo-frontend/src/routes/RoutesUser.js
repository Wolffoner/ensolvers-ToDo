import {
  Routes,
  Route
} from "react-router-dom";
import ViewFormTask from '../components/views/ViewFormTask';
import ViewToDoList from '../components/views/ViewToDoList';
import ViewFolders from '../components/views/ViewFolders';
import ViewFormFolder from '../components/views/ViewFormFolder';
import ViewFormLogin from "../components/views/ViewFormLogin";

// Routes for Admin User
const RoutesUser = () => {

  //Render
  return (
    <>
      <Routes>
        <Route exact path="/" element={<ViewFormLogin/>} />
        <Route path="/folders" element={<ViewFolders/>} />
        <Route path="/list" element={<ViewToDoList/>} />
        <Route path="/formTask" element={<ViewFormTask/>} />
        <Route path="/formFolder" element={<ViewFormFolder/>} />
      </Routes>
    </>
  );
};

export default RoutesUser;